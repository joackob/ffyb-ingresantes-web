"use client";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { ReactNode } from "react";

type AlDetectarUnElementoSiendoArrastrado = ({
  idElementoArrastrado,
}: {
  idElementoArrastrado: string;
}) => void;

type AlDetectarUnElementoSiendoDepositado = ({
  idElementoArrastrado,
  idElementoDondeEsDepositado,
}: {
  idElementoArrastrado: string;
  idElementoDondeEsDepositado: string;
}) => void;

type AlDetectarUnElementoPosandoseSobreOtro = ({
  idElementoArrastrado,
  idElementoSobreElQueSeEstaPosando,
}: {
  idElementoArrastrado: string;
  idElementoSobreElQueSeEstaPosando: string;
}) => void;

const ContextoParaArrastrarYDepositar = ({
  children,
  alDetectarUnElementoSiendoArrastrado,
  alDetectarUnElementoSiendoDepositado,
  alDetectarUnElementoPosandoseSobreOtro,
}: {
  children: ReactNode;
  alDetectarUnElementoSiendoArrastrado: AlDetectarUnElementoSiendoArrastrado;
  alDetectarUnElementoSiendoDepositado: AlDetectarUnElementoSiendoDepositado;
  alDetectarUnElementoPosandoseSobreOtro: AlDetectarUnElementoPosandoseSobreOtro;
}) => {
  return (
    <DndContext
      onDragStart={(event) => {
        alDetectarUnElementoSiendoArrastrado({
          idElementoArrastrado: event.active.id.toString(),
        });
      }}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (!over) return;
        if (active.id === over.id) return;
        alDetectarUnElementoSiendoDepositado({
          idElementoArrastrado: active.id.toString(),
          idElementoDondeEsDepositado: over.id.toString(),
        });
      }}
      onDragOver={(event) => {
        const { active, over } = event;
        if (!over) return;
        if (active.id === over.id) return;
        alDetectarUnElementoPosandoseSobreOtro({
          idElementoArrastrado: active.id.toString(),
          idElementoSobreElQueSeEstaPosando: over.id.toString(),
        });
      }}
      collisionDetection={closestCorners}
    >
      {children}
    </DndContext>
  );
};

export default ContextoParaArrastrarYDepositar;
