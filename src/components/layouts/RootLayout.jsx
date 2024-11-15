import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div>
      <div
        className="max-w-100 flex-1 bg-primary flex items-center justify-end"
        style={{
          height: "50px",
          // alignItems: 'center',
        }}
      >
        {/* <div class=" chip flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300 ">
          <span class="inline-flex items-center justify-center w-4 h-4 ms-1 me-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            <img
              src="https://img.icons8.com/color/512/firebase.png"
              width={45}
              alt=""
            />
          </span>
          Logout
        </div> */}
      </div>
      <div className="flex gap-2">
        <Sidebar />
        <main
          className="max-w-5xl flex-1 mx-auto py-4"
          style={{ maxWidth: "2000px", margin: "1rem" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
