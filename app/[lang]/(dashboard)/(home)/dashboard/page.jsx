import { getDictionary } from "@/app/dictionaries";
import Dashboard from "./page-view";

const DashboardPage = async ({ params: { lang } }) => {
  const trans = await getDictionary(lang);
  return <Dashboard trans={trans} />;
};

export default DashboardPage;
