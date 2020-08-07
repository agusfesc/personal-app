import React from 'react';
import {Body, Row} from './ButtonsStyles'
import Button from '../Button/Button'
const Buttons = () => {
  return ( 
    <Body>
      
      <Row>
        <Button color="#BDB2FF" title="Live" source="twitch.svg" />
        <Button color="#CAFFBF" title="Tasks" source="task.svg" />
      </Row>
   
      <Row>
        <Button color="#A0C4FF" title="Phrases" source="phrase.svg" />
        <Button color="#FFD6A5" title="Reminders" source="reminder.svg" />
      </Row>
   
      <Row>
        <Button color="#FDFFB6" title="Weather" source="weather.svg" />
      </Row>
      
      
    </Body>
   );
}
 
export default Buttons;