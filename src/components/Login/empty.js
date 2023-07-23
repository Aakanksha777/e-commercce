function pureFunc(list, dropDownVal, setterFunc) {
  const dropDownArray = list.filter((item) => {
    return item.eventType === dropDownVal;
  });
  setterFunc(dropDownArray);
}

pureFunc(showData, selectValue, setFilterList);
