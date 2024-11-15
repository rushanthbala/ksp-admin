import React from "react";

const detectFileType = (base64String) => {
  // Check for PDF magic number
  if (base64String.startsWith("JVBER")) {
    return "pdf";
  }

  // Check for DOC magic number
  if (base64String.startsWith("0M8R4K")) {
    return "doc";
  }

  // Add more checks for other file types as needed

  // If the file type is not recognized, return null
  return null;
};

const DownloadButton = ({ base64String,number }) => {
  const downloadFile = async () => {
    // Convert base64 to binary
    const binaryString = atob(base64String);

    // Detect file type
    const fileType = await detectFileType(base64String);

    if (!fileType) {
      console.error("Unknown file type");
      return;
    }

    // Convert binary string to byte array
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }

    // Create a blob from the byte array
    const blob = new Blob([byteArray], { type: `application/${fileType}` });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement("a");
    a.href = url;

    // Set the file name
    a.download = `document.${fileType}`;

    // Append the link to the body
    document.body.appendChild(a);

    // Click the link to trigger download
    a.click();

    // Remove the link from the body
    document.body.removeChild(a);
  };

  return <button onClick={downloadFile}>Download File {number} </button>;
};

export default DownloadButton;
