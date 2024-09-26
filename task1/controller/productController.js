let products = [];

export const createProduct = async (req, res, next) => {
  try {
    const { name, price, quantity } = req.body;

    if (!name || !price || !quantity) {
      return res.status(400).json({ error: "Please provide name, price, and quantity" });
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price,
      quantity,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.id);

    if (!productId) {
      return res
        .status(400)
        .json({ error: "Please provide a valid product ID" });
    }
    const product = products.find((item) => item.id === productId);
    if (!product) {
      return res.status(400).json("Product not found");
    }
    return res.status(400).json({ product });
  } catch (error) {
    next(error);
  }
};

export const updateProducts = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.id);
    const { name, price, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ error: "Please provide a valid product ID" });
    }
    const product = products.find((item) => item.id === productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (name) product.name = name;
    if (price) product.price = price;
    if (quantity) product.quantity = quantity;

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    if (!productId) {
        return res.status(400).json({ error: "Please provide a valid product ID" });
    }
    const productIndex = products.findIndex((item) => item.id === productId);

    if (productIndex === -1) {
      return res.status(404).json({ error: "Product not found" });
    }

    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
