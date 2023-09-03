import ProfileSettings from "../../components/ui/user/ProfileSettings";

function Account() {
  return (
    <main className="flex justify-center items-center py-10">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-1 flex flex-col justify-center items-center gap-4">
          <img src="/logo.png" alt="Avatar" width={200} />
          <h2 className="text-2xl font-semibold">Account name here</h2>
          <div>
            <i>nguyenthanhduy1603@gmail.com</i>
          </div>
        </div>
        <ProfileSettings />
      </div>
    </main>
  );
}

export default Account;
