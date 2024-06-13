import React, { useState } from "react";
import { Container, Input, Button, VStack, HStack, Text, IconButton } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="blue">Add Task</Button>
        </HStack>
        <VStack w="100%" spacing={3}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" justifyContent="space-between">
              <Text>{task}</Text>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrashAlt />} 
                colorScheme="red" 
                onClick={() => deleteTask(index)} 
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;