'use client'
import MyCompanys from "./_partial/my-companys";

export default function Page() {

  return (
    <main
      style={{ height: 'calc(100vh - 64px)' }}
      className="flex flex-col items-center justify-center h-screen bg-gray-200"
    >
      <MyCompanys />
    </main>
  );
}