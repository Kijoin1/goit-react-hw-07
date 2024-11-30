import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const nameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  function handleChange(event) {
    const value = event.target.value;
    dispatch(changeFilter(value));
  }

  return (
    <div className={s.search}>
      <label>Find contacts by name</label>
      <input type="text" value={nameFilter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
