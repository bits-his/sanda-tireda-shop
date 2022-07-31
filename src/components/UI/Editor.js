import React, { useEffect } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "ckeditor4-react";

function Editor({ data = "", data1 = [], onChange = (f) => f }) {
    // useEffect(() => {
    // CKEditor.editorbgcolor = '#000'
    // }, [])
    return (
        <>
            <CKEditor
                config={{
                    toolbar: "standard",
                    extraPlugins:
                        "font,justify,pagebreak,pastefromword,exportpdf,divarea,pastefromlibreoffice,pastefromword,liststyle,dialogadvtab,image,print,templates,save,uploadimage,uploadwidget,widget,lineutils,tabletools",
                    //forms,dialog,dialogui,preview,
                    font_defaultLabel: "Arial",
                    fontSize_defaultLabel: "20"
                }} //base64image
                type="classic"
                //ckeditor4 handleChange
                onChange={(event) => {
                    const _data = event.editor.getData();
                    onChange(_data);
                    //   setTemplateForm((p) => ({ ...p, body: data }));
                    // console.log({ event, editor, data });
                }}
                // editor={ClassicEditor}
                data={data}
                initData={data}
                // data="<p>Hello from CKEditor 4!</p>"

                // data1={data1}
                //ckeditor5
                // onChange={(event, editor) => {
                //     const data = editor.getData();
                //     onChange(data);
                // }}
                // config={{placeholder: "Placeholder text...",
                // // extraPlugins: 'justify'
                // }}
            />
            {/* {JSON.stringify(data)} */}
        </>
    );
}

export default Editor;
