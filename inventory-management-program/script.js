const inventory = [];

function findProductIndex(name) {
  return inventory.findIndex(obj => obj.name.toLowerCase() === name.toLowerCase());
}

function addProduct(newObj) {
  const existing = inventory.find(item => item.name.toLowerCase() === newObj.name.toLowerCase());
  if (existing) {
    existing.quantity += newObj.quantity;
    console.log(`${newObj.name.toLowerCase()} quantity updated`);
  } else {
    inventory.push({ name: newObj.name.toLowerCase(), quantity: newObj.quantity });
    console.log(`${newObj.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const index = findProductIndex(name);
  if (index === -1) {
    console.log(`${name.toLowerCase()} not found`);
    return;
  }
  
  const product = inventory[index];
  if (product.quantity < quantity) {
    console.log(`Not enough ${name.toLowerCase()} available, remaining pieces: ${product.quantity}`);
    return;
  }
  
  product.quantity -= quantity;
  if (product.quantity === 0) {
    inventory.splice(index, 1);
    console.log(`Remaining ${name.toLowerCase()} pieces: 0`);
  } else {
    console.log(`Remaining ${name.toLowerCase()} pieces: ${product.quantity}`);
  }
}