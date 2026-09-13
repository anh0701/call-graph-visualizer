import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('callGraph.showGraph', () => {
        vscode.window.showInformationMessage('Call Graph Extension đã sẵn sàng!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}