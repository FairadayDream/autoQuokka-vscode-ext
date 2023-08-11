import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument((document: vscode.TextDocument) => {
      if (
        document.languageId === "javascript" ||
        document.languageId === "typescript"
      ) {
        vscode.commands.executeCommand("quokka.start");
      }
    })
  );
}

export function deactivate() {}
