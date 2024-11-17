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

const Personaliza = () => {
  const plan = usePlanPersonalizable();
  const materia = useMateriaSeleccionable();

  return (
    <ImagenDeFondo>
      <TituloCarrera carrera={"Farmacia"} />
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
          {plan.actual().map(({ cuatrimestre, materias }) => (
            <TarjetaDondeDepositar
              id={cuatrimestre.toString()}
              key={cuatrimestre}
              items={materias}
            >
              <TarjetaParaCuatrimestre posicion={cuatrimestre}>
                {materias.map(({ nombre, estado }) => (
                  <TarjetaArrastrable id={nombre} key={nombre}>
                    <TarjetaParaMateria nombre={nombre}>
                      <ChipCursada cursada={estado} />
                    </TarjetaParaMateria>
                  </TarjetaArrastrable>
                ))}
              </TarjetaParaCuatrimestre>
            </TarjetaDondeDepositar>
          ))}
          <TarjetaParaCubrirArrastre esArrastrada={materia.fueSeleccionada()}>
            <TarjetaParaMateria nombre={materia.eleccion()?.nombre}>
              <ChipCursada cursada={materia.eleccion()?.estado} />
            </TarjetaParaMateria>
          </TarjetaParaCubrirArrastre>
        </ContextoParaArrastrarYDepositar>
      </TableroParaCuatrimestres>
    </ImagenDeFondo>
  );
};

export default Personaliza;
