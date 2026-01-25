import { Lookup } from "#common/models";
import { useConfirmationDialog } from "./confirmation-dialog.hook";
import { renderHook, act } from "@testing-library/react";

describe("useConfirmationDialog hook specs", () => {
    it('should return an object: isOpen, itemToDelete and functions onAccept, onClose, onOpenDialog', () => {
        // Arrange
        
        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        
        // Assert
        const expectedResult: Lookup = { id: "", name: "" };

        expect(result.current.isOpen).toBe(false);
        expect(result.current.itemToDelete).toEqual(expectedResult);
        expect(result.current.onAccept).toEqual(expect.any(Function));
        expect(result.current.onClose).toEqual(expect.any(Function));
        expect(result.current.onOpenDialog).toEqual(expect.any(Function));
    });

    it('should open dialog and set item to delete', () => {
        // Arrange
        const newItem: Lookup = { id: "1", name: "Test item to delete" };

        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        
        act(() => { 
            result.current.onOpenDialog(newItem);
        });

        // Assert
        expect(result.current.itemToDelete).toEqual(newItem);
        expect(result.current.isOpen).toBe(true);
    });

    it("should update to empty item when accept is called", () => {
        
        // Arrange
        const newItem: Lookup = { id: "1", name: "Test item to delete" };
        const expectedResult: Lookup = { id: "", name: "" };
        
        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        act(() => { 
            result.current.onOpenDialog(newItem);
        });

        act(() => {
            result.current.onAccept();
        });

        // Assert
        expect(result.current.itemToDelete).toEqual(expectedResult);
    });

    it("should close dialog when onClose is called", () => {
        // Arrange
        const newItem: Lookup = { id: "1", name: "Test item to delete" };

        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        act(() => { 
            result.current.onOpenDialog(newItem);
        });

        act(() => {
            result.current.onClose();
        });
        
        // Assert
        expect(result.current.isOpen).toBe(false);
    });
})
