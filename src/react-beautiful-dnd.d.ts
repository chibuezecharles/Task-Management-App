declare module "react-beautiful-dnd" {
    import * as React from "react";
  
    export interface DragDropContextProps {
      onDragEnd: (result: DropResult) => void;
      children?: React.ReactNode;
    }
  
    export interface DroppableProps {
      droppableId: string;
      children: (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => React.ReactNode;
    }
  
    export interface DraggableProps {
      draggableId: string;
      index: number;
      children: (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => React.ReactNode;
    }
  
    export interface DropResult {
      draggableId: string;
      type: string;
      source: DraggableLocation;
      destination?: DraggableLocation;
      reason: "DROP" | "CANCEL";
      combine?: Combine;
      mode: "FLUID" | "SNAP";
    }
  
    export interface DraggableLocation {
      droppableId: string;
      index: number;
    }
  
    export interface Combine {
      draggableId: string;
      droppableId: string;
    }
  
    export interface DroppableProvided {
      innerRef: (element: HTMLElement | null) => any;
      droppableProps: object;
      placeholder?: React.ReactElement | null;
    }
  
    export interface DroppableStateSnapshot {
      isDraggingOver: boolean;
      draggingOverWith?: string;
    }
  
    export interface DraggableProvided {
      innerRef: (element: HTMLElement | null) => any;
      draggableProps: object;
      dragHandleProps?: object;
    }
  
    export interface DraggableStateSnapshot {
      isDragging: boolean;
      draggingOver?: string;
      combineWith?: string;
      combineTargetFor?: string;
      mode?: "FLUID" | "SNAP";
    }
  
    export class DragDropContext extends React.Component<DragDropContextProps, any> {}
    export class Droppable extends React.Component<DroppableProps, any> {}
    export class Draggable extends React.Component<DraggableProps, any> {}
  }
  