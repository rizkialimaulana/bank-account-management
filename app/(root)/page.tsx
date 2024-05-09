import { HeaderBox, RightSidebar, TotalBalanceBox } from "@/components/common";

export default function Home() {
  const loggedIn = {
    firstName: "Rizki",
    lastName: "Ali Maulana",
    email: "maulanarizkiali@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />

          <TotalBalanceBox
            totalBanks={1}
            accounts={[]}
            totalCurrentBalance={25000000}
          />
        </header>

        {/* <RecentTransaction /> */}
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
}
