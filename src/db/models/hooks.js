export const handleSaveError = (error, doc, next) => {
  console.log(error);
  error.status = 400;
  next();
};

export const setUpdateSettings = function (next) {
  (this.options.new = true), (this.options.runValidators = true), next();
};
