/**********************************************
 *      DO NOT MODIFY THIS FILE MANUALLY      *
 *                                            *
 *     THIS FILE HAS BEEN FETCHED FROM THE    *
 *      TYPESCRIPT PLAYGROUND SOURCE CODE.    *
 *                                            *
 *    YOU CAN REGENERATE THESE FILES USING    *
 *          yarn generate-website-dts         *
 **********************************************/

import type * as ts from 'typescript';
import type * as MonacoEditor from 'monaco-editor';
import type TypeScriptWorker = MonacoEditor.languages.typescript.TypeScriptWorker;
import type lzstring from 'lz-string';
import type * as tsvfs from './typescript-vfs';
type CompilerOptions = MonacoEditor.languages.typescript.CompilerOptions;
type Monaco = typeof MonacoEditor;
/**
 * These are settings for the playground which are the equivalent to props in React
 * any changes to it should require a new setup of the playground
 */
export type SandboxConfig = {
  /** The default source code for the playground */
  text: string;
  /** @deprecated */
  useJavaScript?: boolean;
  /** The default file for the playground  */
  filetype: 'js' | 'ts' | 'd.ts';
  /** Compiler options which are automatically just forwarded on */
  compilerOptions: CompilerOptions;
  /** Optional monaco settings overrides */
  monacoSettings?: MonacoEditor.editor.IEditorOptions;
  /** Acquire types via type acquisition */
  acquireTypes: boolean;
  /** Support twoslash compiler options */
  supportTwoslashCompilerOptions: boolean;
  /** Get the text via query params and local storage, useful when the editor is the main experience */
  suppressAutomaticallyGettingDefaultText?: true;
  /** Suppress setting compiler options from the compiler flags from query params */
  suppressAutomaticallyGettingCompilerFlags?: true;
  /** Optional path to TypeScript worker wrapper class script, see https://github.com/microsoft/monaco-typescript/pull/65  */
  customTypeScriptWorkerPath?: string;
  /** Logging system */
  logger: {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
    groupCollapsed: (...args: any[]) => void;
    groupEnd: (...args: any[]) => void;
  };
} & (
  | {
      domID: string;
    }
  | {
      elementToAppend: HTMLElement;
    }
);
/** The default settings which we apply a partial over */
export declare function defaultPlaygroundSettings(): {
  /** The default source code for the playground */
  text: string;
  /** @deprecated */
  useJavaScript?: boolean;
  /** The default file for the playground  */
  filetype: 'js' | 'ts' | 'd.ts';
  /** Compiler options which are automatically just forwarded on */
  compilerOptions: CompilerOptions;
  /** Optional monaco settings overrides */
  monacoSettings?: MonacoEditor.editor.IEditorOptions;
  /** Acquire types via type acquisition */
  acquireTypes: boolean;
  /** Support twoslash compiler options */
  supportTwoslashCompilerOptions: boolean;
  /** Get the text via query params and local storage, useful when the editor is the main experience */
  suppressAutomaticallyGettingDefaultText?: true;
  /** Suppress setting compiler options from the compiler flags from query params */
  suppressAutomaticallyGettingCompilerFlags?: true;
  /** Optional path to TypeScript worker wrapper class script, see https://github.com/microsoft/monaco-typescript/pull/65  */
  customTypeScriptWorkerPath?: string;
  /** Logging system */
  logger: {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
    groupCollapsed: (...args: any[]) => void;
    groupEnd: (...args: any[]) => void;
  };
} & {
  domID: string;
};
/** Creates a sandbox editor, and returns a set of useful functions and the editor */
export declare const createTypeScriptSandbox: (
  partialConfig: Partial<SandboxConfig>,
  monaco: Monaco,
  ts: typeof ts,
) => {
  /** The same config you passed in */
  config:
    | {
        text: string;
        useJavaScript?: boolean;
        filetype: 'js' | 'ts' | 'd.ts';
        compilerOptions: CompilerOptions;
        monacoSettings?: MonacoEditor.editor.IEditorOptions;
        acquireTypes: boolean;
        supportTwoslashCompilerOptions: boolean;
        suppressAutomaticallyGettingDefaultText?: true;
        suppressAutomaticallyGettingCompilerFlags?: true;
        customTypeScriptWorkerPath?: string;
        logger: {
          log: (...args: any[]) => void;
          error: (...args: any[]) => void;
          groupCollapsed: (...args: any[]) => void;
          groupEnd: (...args: any[]) => void;
        };
        domID: string;
      }
    | {
        text: string;
        useJavaScript?: boolean;
        filetype: 'js' | 'ts' | 'd.ts';
        compilerOptions: CompilerOptions;
        monacoSettings?: MonacoEditor.editor.IEditorOptions;
        acquireTypes: boolean;
        supportTwoslashCompilerOptions: boolean;
        suppressAutomaticallyGettingDefaultText?: true;
        suppressAutomaticallyGettingCompilerFlags?: true;
        customTypeScriptWorkerPath?: string;
        logger: {
          log: (...args: any[]) => void;
          error: (...args: any[]) => void;
          groupCollapsed: (...args: any[]) => void;
          groupEnd: (...args: any[]) => void;
        };
        elementToAppend?: HTMLElement | undefined;
        domID: string;
      };
  /** A list of TypeScript versions you can use with the TypeScript sandbox */
  supportedVersions: readonly [
    '5.5.3',
    '5.4.5',
    '5.3.3',
    '5.2.2',
    '5.1.6',
    '5.0.4',
    '4.9.5',
    '4.8.4',
    '4.7.4',
    '4.6.4',
    '4.5.5',
    '4.4.4',
    '4.3.5',
    '4.2.3',
    '4.1.5',
    '4.0.5',
    '3.9.7',
    '3.8.3',
    '3.7.5',
    '3.6.3',
    '3.5.1',
    '3.3.3',
    '3.1.6',
    '3.0.1',
    '2.8.1',
    '2.7.2',
    '2.4.1',
  ];
  /** The monaco editor instance */
  editor: MonacoEditor.editor.IStandaloneCodeEditor;
  /** Either "typescript" or "javascript" depending on your config */
  language: string;
  /** The outer monaco module, the result of require("monaco-editor")  */
  monaco: typeof MonacoEditor;
  /** Gets a monaco-typescript worker, this will give you access to a language server. Note: prefer this for language server work because it happens on a webworker . */
  getWorkerProcess: () => Promise<TypeScriptWorker>;
  /** A copy of require("@typescript/vfs") this can be used to quickly set up an in-memory compiler runs for ASTs, or to get complex language server results (anything above has to be serialized when passed)*/
  tsvfs: typeof tsvfs;
  /** Get all the different emitted files after TypeScript is run */
  getEmitResult: (
    emitOnlyDtsFiles?: boolean,
    forceDtsEmit?: boolean,
  ) => Promise<ts.EmitOutput>;
  /** Gets just the JavaScript for your sandbox, will transpile if in TS only */
  getRunnableJS: () => Promise<string>;
  /** Gets the DTS output of the main code in the editor */
  getDTSForCode: () => Promise<string>;
  /** The monaco-editor dom node, used for showing/hiding the editor */
  getDomNode: () => HTMLElement;
  /** The model is an object which monaco uses to keep track of text in the editor. Use this to directly modify the text in the editor */
  getModel: () => MonacoEditor.editor.ITextModel;
  /** Gets the text of the main model, which is the text in the editor */
  getText: () => string;
  /** Shortcut for setting the model's text content which would update the editor */
  setText: (text: string) => void;
  /** Gets the AST of the current text in monaco - uses `createTSProgram`, so the performance caveat applies there too */
  getAST: () => Promise<ts.SourceFile>;
  /** The module you get from require("typescript") */
  ts: typeof ts;
  /** Create a new Program, a TypeScript data model which represents the entire project. As well as some of the
   * primitive objects you would normally need to do work with the files.
   *
   * The first time this is called it has to download all the DTS files which is needed for an exact compiler run. Which
   * at max is about 1.5MB - after that subsequent downloads of dts lib files come from localStorage.
   *
   * Try to use this sparingly as it can be computationally expensive, at the minimum you should be using the debounced setup.
   *
   * Accepts an optional fsMap which you can use to add any files, or overwrite the default file.
   *
   * TODO: It would be good to create an easy way to have a single program instance which is updated for you
   * when the monaco model changes.
   */
  setupTSVFS: (fsMapAdditions?: Map<string, string>) => Promise<{
    program: ts.Program;
    system: ts.System;
    host: {
      compilerHost: ts.CompilerHost;
      updateFile: (sourceFile: ts.SourceFile) => boolean;
      deleteFile: (sourceFile: ts.SourceFile) => boolean;
    };
    fsMap: Map<string, string>;
  }>;
  /** Uses the above call setupTSVFS, but only returns the program */
  createTSProgram: () => Promise<ts.Program>;
  /** The Sandbox's default compiler options  */
  compilerDefaults: {
    [x: string]: MonacoEditor.languages.typescript.CompilerOptionsValue;
    allowJs?: boolean;
    allowSyntheticDefaultImports?: boolean;
    allowUmdGlobalAccess?: boolean;
    allowUnreachableCode?: boolean;
    allowUnusedLabels?: boolean;
    alwaysStrict?: boolean;
    baseUrl?: string;
    charset?: string;
    checkJs?: boolean;
    declaration?: boolean;
    declarationMap?: boolean;
    emitDeclarationOnly?: boolean;
    declarationDir?: string;
    disableSizeLimit?: boolean;
    disableSourceOfProjectReferenceRedirect?: boolean;
    downlevelIteration?: boolean;
    emitBOM?: boolean;
    emitDecoratorMetadata?: boolean;
    experimentalDecorators?: boolean;
    forceConsistentCasingInFileNames?: boolean;
    importHelpers?: boolean;
    inlineSourceMap?: boolean;
    inlineSources?: boolean;
    isolatedDeclarations?: boolean;
    isolatedModules?: boolean;
    jsx?: MonacoEditor.languages.typescript.JsxEmit;
    keyofStringsOnly?: boolean;
    lib?: string[];
    locale?: string;
    mapRoot?: string;
    maxNodeModuleJsDepth?: number;
    module?: MonacoEditor.languages.typescript.ModuleKind;
    moduleResolution?: MonacoEditor.languages.typescript.ModuleResolutionKind;
    newLine?: MonacoEditor.languages.typescript.NewLineKind;
    noEmit?: boolean;
    noEmitHelpers?: boolean;
    noEmitOnError?: boolean;
    noErrorTruncation?: boolean;
    noFallthroughCasesInSwitch?: boolean;
    noImplicitAny?: boolean;
    noImplicitReturns?: boolean;
    noImplicitThis?: boolean;
    noStrictGenericChecks?: boolean;
    noUnusedLocals?: boolean;
    noUnusedParameters?: boolean;
    noImplicitUseStrict?: boolean;
    noLib?: boolean;
    noResolve?: boolean;
    out?: string;
    outDir?: string;
    outFile?: string;
    paths?: MonacoEditor.languages.typescript.MapLike<string[]>;
    preserveConstEnums?: boolean;
    preserveSymlinks?: boolean;
    project?: string;
    reactNamespace?: string;
    jsxFactory?: string;
    composite?: boolean;
    removeComments?: boolean;
    rootDir?: string;
    rootDirs?: string[];
    skipLibCheck?: boolean;
    skipDefaultLibCheck?: boolean;
    sourceMap?: boolean;
    sourceRoot?: string;
    strict?: boolean;
    strictFunctionTypes?: boolean;
    strictBindCallApply?: boolean;
    strictNullChecks?: boolean;
    strictPropertyInitialization?: boolean;
    stripInternal?: boolean;
    suppressExcessPropertyErrors?: boolean;
    suppressImplicitAnyIndexErrors?: boolean;
    target?: MonacoEditor.languages.typescript.ScriptTarget;
    traceResolution?: boolean;
    resolveJsonModule?: boolean;
    types?: string[];
    typeRoots?: string[];
    esModuleInterop?: boolean;
    useDefineForClassFields?: boolean;
  };
  /** The Sandbox's current compiler options */
  getCompilerOptions: () => MonacoEditor.languages.typescript.CompilerOptions;
  /** Replace the Sandbox's compiler options */
  setCompilerSettings: (opts: CompilerOptions) => void;
  /** Overwrite the Sandbox's compiler options */
  updateCompilerSetting: (key: keyof CompilerOptions, value: any) => void;
  /** Update a single compiler option in the SAndbox */
  updateCompilerSettings: (opts: CompilerOptions) => void;
  /** A way to get callbacks when compiler settings have changed */
  setDidUpdateCompilerSettings: (func: (opts: CompilerOptions) => void) => void;
  /** A copy of lzstring, which is used to archive/unarchive code */
  lzstring: typeof lzstring;
  /** Returns compiler options found in the params of the current page */
  createURLQueryWithCompilerOptions: (
    _sandbox: any,
    paramOverrides?: any,
  ) => string;
  /**
   * @deprecated Use `getTwoSlashCompilerOptions` instead.
   *
   * Returns compiler options in the source code using twoslash notation
   */
  getTwoSlashComplierOptions: (code: string) => any;
  /** Returns compiler options in the source code using twoslash notation */
  getTwoSlashCompilerOptions: (code: string) => any;
  /** Gets to the current monaco-language, this is how you talk to the background webworkers */
  languageServiceDefaults: MonacoEditor.languages.typescript.LanguageServiceDefaults;
  /** The path which represents the current file using the current compiler options */
  filepath: string;
  /** Adds a file to the vfs used by the editor */
  addLibraryToRuntime: (code: string, _path: string) => void;
};
export type Sandbox = ReturnType<typeof createTypeScriptSandbox>;
export {};
