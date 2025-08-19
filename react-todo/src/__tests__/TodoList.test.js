import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  // Test to verify that the component renders with initial todos
  test('renders the initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  // Test to verify that a new todo can be added
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  // Test to verify that a todo can be toggled
  test('toggles a todo as completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  // Test to verify that a todo can be deleted
  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButton = todoItem.nextSibling;
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});