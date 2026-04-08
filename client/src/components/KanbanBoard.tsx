import {

  DragDropContext

} from "@hello-pangea/dnd";

import Column from "./Column";

const statuses = [

  "Applied",

  "Phone Screen",

  "Interview",

  "Offer",

  "Rejected"

];

export default function KanbanBoard({

  data,

  moveCard

}) {

  function handleDrag(result) {

    if (!result.destination)

      return;

    moveCard(

      result.draggableId,

      result.destination.droppableId

    );

  }

  return (

    <DragDropContext

      onDragEnd={handleDrag}

    >

      <div className="grid grid-cols-5 gap-4">

        {statuses.map(status => (

          <Column

            key={status}

            status={status}

            data={data.filter(

              a => a.status === status

            )}

          />

        ))}

      </div>

    </DragDropContext>

  );

}