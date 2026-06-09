import prisma from "@/lib/prisma";
import MenuPageContent from "./_components/MenuPageContent";

const Menu = async () => {
  const dataMenu = await prisma.menu.findMany({});
  return <MenuPageContent dataMenu={dataMenu} />;
};

export default Menu;
