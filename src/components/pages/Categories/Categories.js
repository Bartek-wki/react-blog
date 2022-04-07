import RenderCategoriesList from "../../features/RenderCategoriesList/RenderCategoriesList";

const Categories = () => {
  return (
    <>
      <h1 className="mb-4">All categories:</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <RenderCategoriesList />
      </div>
    </>
  )
}

export default Categories;