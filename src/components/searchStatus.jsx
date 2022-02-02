import React from "react";
import PropTypes from "prop-types";
import TextField from "./textField";

const SearchStatus = ({ length, onChange, value }) => {
  let phrase = "";
  let classes = "badge bg-secondary fs-3 text-center";

  if (length === 0) {
    phrase = "Никто с тобой не тусанёт";
    classes = "badge bg-danger  fs-3 text-center";
  } else if (length === 2 || length === 3 || length === 4) {
    phrase = "  человека тусанут с тобой сегодня";
  } else if (length === 1) {
    phrase = "  человек тусанёт с тобой сегодня";
  } else {
    phrase = "  человек тусанут с тобой сегодня";
  }
  //    <h1 className={classes}>{length}{phrase}</h1>;
  if (length === 0) {
    return <h1 className={classes}>{phrase}</h1>;
  } else {
    return (
      <div>
        <h1 className={classes}>
          {length}
          {phrase}
        </h1>
        <TextField
          label="Поиск"
          name="search"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.string,
  value: PropTypes.func,
};

export default SearchStatus;

// const filterdUsers = search.filter((user) => {
//   return user.name.to.owerCase().includes(search.toLocaleLowerCase())
// });
