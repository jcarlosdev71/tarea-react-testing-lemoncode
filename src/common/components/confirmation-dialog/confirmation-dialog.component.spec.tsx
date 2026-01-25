import React from "react";
import {render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";

describe("ConfirmationDialog component specs", () => {
    it("should open modal when isOpen is true", () => {
        // Arrange
        const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Prueba de modal",
            labels: { closeButton: "Cancelar", acceptButton: "Aceptar" },
            children: <p>Contenido de modal</p>,
        };

        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const dialog = screen.getByRole("dialog");

        // Assert
        expect(dialog).toBeInTheDocument();
    });

    it("should display label with text 'Prueba de modal' when modal is open", () => {
        // Arrange
        const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Prueba de modal",
            labels: { closeButton: "Cancelar", acceptButton: "Aceptar" },
            children: <p>Contenido de modal</p>,
        };

        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const title = screen.getByText("Prueba de modal");

        // Assert
        expect(title).toBeInTheDocument();
    });

    it("should click Cancelar button and call onClose", async () => {
        // Arrange
        const user = userEvent.setup();
        const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Prueba de modal",
            labels: { closeButton: "Cancelar", acceptButton: "Aceptar" },
            children: <p>Contenido de modal</p>,
        };

        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const closeButton = screen.getByRole("button", { name: /Cancelar/i });
        await user.click(closeButton);

        // Assert
        expect(props.onClose).toHaveBeenCalledTimes(1);
    });

    it("should click Aceptar button and call onAccept", async () => {
        // Arrange
        const user = userEvent.setup();
        const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Prueba de modal",
            labels: { closeButton: "Cancelar", acceptButton: "Aceptar" },
            children: <p>Contenido de modal</p>,
        };

        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const acceptButton = screen.getByRole("button", { name: /Aceptar/i });
        await user.click(acceptButton);

        // Assert
        expect(props.onAccept).toHaveBeenCalledTimes(1);
    });

    it("should display children content", () => {
        // Arrange
        const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Prueba de modal",
            labels: { closeButton: "Cancelar", acceptButton: "Aceptar" },
            children: <p>Contenido de modal</p>,
        };  

        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const content = screen.getByText("Contenido de modal");

        // Assert
        expect(content).toBeInTheDocument();
    });

    it("should not render dialog when isOpen is false", () => {
        // Arrange
        const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
            isOpen: false,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Prueba de modal",
            labels: { closeButton: "Cancelar", acceptButton: "Aceptar" },
            children: <p>Contenido de modal</p>,
        };

        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const dialog = screen.queryByRole("dialog");

        // Assert
        expect(dialog).not.toBeInTheDocument();
    });
    
});