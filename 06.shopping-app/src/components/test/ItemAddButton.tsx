import { collection, doc, writeBatch } from "firebase/firestore";
import Button from "../shared/Button";
import { store } from "../../apis/firebase";
import { data } from "../../mock/data";

const ItemAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    data.forEach((item) => {
      const docRef = doc(collection(store, "ITEM"));
      batch.set(docRef, item);
    });
    await batch.commit();
    alert("completly add to cards");
  };

  return <Button onClick={handleButtonClick}>Add to Item</Button>;
};

export default ItemAddButton;
