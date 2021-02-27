declare module '@ckeditor/ckeditor5-build-decoupled-document' { // or other CKEditor 5 build.
	const ClassicEditorBuild: any;

	export = ClassicEditorBuild;
}

declare module 'src/ckeditor/SimpleUploadAdapter' { 
	const MyCustomUploadAdapterPlugin: any;

	export default MyCustomUploadAdapterPlugin
}
declare module 'ckeditor5-image-remove-event-callback-plugin' {
	const ImageRemoveEventCallbackPlugin: any

	export default ImageRemoveEventCallbackPlugin
}