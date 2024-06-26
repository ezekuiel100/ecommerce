import { useContext } from "react";
import RadioInput from "../RadioInput";
import { Context } from "../../App";

function Category() {
  const { setCategory, category, setCompany, setSearch } = useContext(Context);

  function handleCategory(e) {
    setCategory(e.target.id);
    setCompany("Todos");
    setSearch("");
  }

  return (
    <div className="mr-6 my-8">
      <h2 className="text-xl">Categoria</h2>
      <RadioInput
        text={"Todos"}
        name={"category"}
        id={"Todos"}
        handleClick={handleCategory}
        selected={category}
      />
      <RadioInput
        text={"Tênis"}
        name={"category"}
        id={"Tênis"}
        handleClick={handleCategory}
        selected={category}
      />
      <RadioInput
        text={"Sapatilhas"}
        name={"category"}
        id={"Sapatilhas"}
        handleClick={handleCategory}
        selected={category}
      />
      <RadioInput
        text={"Sandálias"}
        name={"category"}
        id={"Sandálias"}
        handleClick={handleCategory}
        selected={category}
      />
      <RadioInput
        text={"Salto"}
        name={"category"}
        id={"Salto"}
        handleClick={handleCategory}
        selected={category}
      />
    </div>
  );
}

export default Category;
