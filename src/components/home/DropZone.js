import React, {Component} from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondFileEncode from 'filepond-plugin-file-encode';
import FilePondFileSizeValidation from 'filepond-plugin-file-validate-size';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {setOptions} from "filepond";

registerPlugin(FilePondFileEncode, FilePondPluginImagePreview, FilePondFileSizeValidation);

export default class DropZone extends Component {
    constructor(props) {
        super(props);
        setOptions({
            allowImagePreview: true,
            instantUpload: true,
            allowMultiple: false,
            server: {
                process: {
                    url: 'http://172.16.0.10:3000/encrypt',
                    method: 'POST',
                    withCredentials: false,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    timeout: 200000, // 200 seconds
                },
            }
        });
        this.state = {
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
            files: [{
                source: 'index.html',
                options: {
                    type: 'local'
                }
            }]
        };
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return (
            <div className="ui">

                {/* Pass FilePond properties as attributes */}
                <FilePond ref={ref => this.pond = ref}
                          // files={this.state.files}
                          oninit={() => this.handleInit()}>

                </FilePond>

            </div>
        );
    }
}