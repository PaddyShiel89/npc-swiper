import MobileNavigation from "../MobileNavigation/MobileNavigation";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {children}
      <MobileNavigation />
    </>
  );
};

export default MainLayout;

interface MainLayoutProps {
  children: React.ReactNode;
}
