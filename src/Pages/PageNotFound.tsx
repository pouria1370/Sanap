import notFound from "@assets/notfound.webp";

const PageNotFound = () => (
  <div className="  panel-main-body bg-cover flex flex-col items-center w-full h-screen opacity-80">
    <img src={notFound} width="40%" alt="page not found!" />
  </div>
);

export default PageNotFound;
