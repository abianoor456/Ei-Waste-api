const createDocument = async (Model, data) => {
    try {
      const document = new Model(data);
      const savedDocument = await document.save();
      return { success: true, data: savedDocument };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  module.exports = createDocument;