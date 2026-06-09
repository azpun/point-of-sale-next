import prisma from "@/lib/prisma";
import MenuPageContent from "./_components/MenuPageContent";

const Menu = async () => {
  // const dataMenu = await prisma.menu.findMany({});
  // console.log(dataMenu);
  return <MenuPageContent />;
};

export default Menu;
