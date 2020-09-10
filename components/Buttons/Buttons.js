import React from 'react';
import {Body, Row} from './ButtonsStyles';
import Button from '../Button/Button';

const Buttons = () => {
  return ( 
    <Body>
      <Row>
        <Button color="#BDB2FF" title="Live" source="twitch.svg" url="live" />
        <Button color="#CAFFBF" title="Tasks" source="task.svg" url="tasks"  />
      </Row>
   
      <Row>
        <Button color="#A0C4FF" title="Dictionary" source="book.svg" url="dictionary"  />
        <Button color="#FFD6A5" title="Reminders" source="reminder.svg" url="reminders"  />
      </Row>
   
      <Row>
        <Button color="#FDFFB6" title="Weather" source="weather.svg" url="weather"  />
      </Row>
    </Body>
   );
}
 
export default Buttons;