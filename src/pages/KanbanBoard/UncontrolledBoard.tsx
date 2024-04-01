import React from "react"

import Board from "@lourenci/react-kanban"
import { Row, Col } from "reactstrap"
import CardTaskBox from "./card-task-box"
import RenderCardTitle from "./render-card-title"

const UncontrolledBoard = (props : any) => {
  const content = props.board
  return (
    <React.Fragment>
      <Row className="mb-4">
        <Col>
          <Board
            initialBoard={content}
            renderColumnHeader={({ title } : any) => (
              <RenderCardTitle title={title} />
            )}
            renderCard={(data : any, { dragging } : any) => (
              <CardTaskBox data={data} dragging={dragging}>
                {data}
              </CardTaskBox>
            )}
            onNewCardConfirm={(draftCard : any) => ({
              id: new Date().getTime(),
              ...draftCard,
            })}
            allowAddCard={{ on: 'bottom' }}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default UncontrolledBoard