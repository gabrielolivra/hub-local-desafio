import { signOut } from '@/auth';

export default async function Page() {
  return (
    <main>
      <div>
        <div className="flex justify-end">
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="m-4 pl-4 p-1 pr-4 font-bold text-red-500 border border-red-500 rounded">
              Sair
            </button>
          </form>
        </div>
        <h1 className="text-center text-4xl font-bold p-10">Tela inicial</h1>
      </div>
      <div className="flex items-start justify-center my-32 gap-4 flex-wrap">

      </div>
    </main>
  );
}
