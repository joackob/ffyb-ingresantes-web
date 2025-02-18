"use client";
import TarjetaParaCuatrimestre from "./components/TarjetaParaCuatrimestre";
import ImagenDeFondo from "./components/ImagenDeFondo";
import TarjetaParaMateria from "./components/TarjetaParaMateria";
import TableroParaCuatrimestres from "./components/TableroParaCuatrimestres";
import TituloCarrera from "./components/TituloCarrera";
import { useMateriaSeleccionable } from "./hooks/useMateriaSeleccionable";
import { usePlanPersonalizable } from "./hooks/usePlanPersonalizable";
import ContextoParaArrastrarYDepositar from "./dnd-components/ContextoParaArrastrarYSoltar";
import TarjetaDondeDepositar from "./dnd-components/TarjetaDondeDepositar";
import TarjetaArrastrable from "./dnd-components/TarjetaArrastrable";
import TarjetaParaCubrirArrastre from "./dnd-components/TarjetaParaCubrirArrastre";
import { ChipCursada } from "./components/ChipCursada";
import SelectorDeCarreras from "./components/SelectorDeCarreras";
import EncabezadoParaElTableroDeCuatrimestres from "./components/EncabezadoParaElTableroDeCuatrimestres";
import { Materia } from "@/src/api/carreras/types";

const Personaliza = ({
  cuatrimestres,
  materias,
  nombre,
}: {
  nombre: string;
  cuatrimestres: Map<string, Materia[]>;
  materias: Map<string, Materia>;
}) => {
  const plan = usePlanPersonalizable(cuatrimestres);
  const materia = useMateriaSeleccionable(materias);

  return (
    <ImagenDeFondo>
      <EncabezadoParaElTableroDeCuatrimestres>
        <TituloCarrera carrera={nombre} />
        <SelectorDeCarreras />
      </EncabezadoParaElTableroDeCuatrimestres>
      <TableroParaCuatrimestres>
        <ContextoParaArrastrarYDepositar
          alDetectarUnElementoSiendoArrastrado={({ idElementoArrastrado }) =>
            materia.seleccionar({ id: idElementoArrastrado })
          }
          alDetectarUnElementoPosandoseSobreOtro={({
            idElementoArrastrado,
            idElementoSobreElQueSeEstaPosando,
          }) =>
            plan.actualizar({
              idOrigen: idElementoArrastrado,
              idDestino: idElementoSobreElQueSeEstaPosando,
            })
          }
          alDetectarUnElementoSiendoDepositado={({
            idElementoArrastrado,
            idElementoDondeEsDepositado,
          }) => {
            materia.deseleccionar();
            plan.ordenar({
              idOrigen: idElementoArrastrado,
              idDestino: idElementoDondeEsDepositado,
            });
          }}
        >
          {plan.actual().map(({ id, materias }) => (
            <TarjetaDondeDepositar id={id} key={id} items={materias}>
              <TarjetaParaCuatrimestre cuatrimestre={id}>
                {materias.map(({ id, nombre }) => (
                  <TarjetaArrastrable id={id} key={id}>
                    <TarjetaParaMateria nombre={nombre}>
                      <ChipCursada cursada={"No disponible"} />
                    </TarjetaParaMateria>
                  </TarjetaArrastrable>
                ))}
              </TarjetaParaCuatrimestre>
            </TarjetaDondeDepositar>
          ))}
          <TarjetaParaCubrirArrastre esArrastrada={materia.fueSeleccionada()}>
            <TarjetaParaMateria nombre={materia.eleccion()?.nombre}>
              <ChipCursada cursada={"No disponible"} />
            </TarjetaParaMateria>
          </TarjetaParaCubrirArrastre>
        </ContextoParaArrastrarYDepositar>
      </TableroParaCuatrimestres>
    </ImagenDeFondo>
  );
};

export default Personaliza;
