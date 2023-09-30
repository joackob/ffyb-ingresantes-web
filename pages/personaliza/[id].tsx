import Personaliza from "@/src/Personaliza/Personaliza";
import { useRouter } from "next/router";
import { carreras } from "@/src/database/database";

const personaliza = () => {
  const router = useRouter();
  const id = router.query.id != undefined ? Number(router.query.id): 0;
  const item = carreras[id];
  return <Personaliza subjects={item.materias} />;
};

export default personaliza;