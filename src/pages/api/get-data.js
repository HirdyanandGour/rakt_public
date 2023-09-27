import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../../utils/firebase";

const firestore = getFirestore(app);

export default async function handler(req, res) {
  const snapshot = await getDocs(collection(firestore, "rakt"));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.status(200).json(data);
}
