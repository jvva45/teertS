import { useState, useRef, useEffect } from 'react'
import './ImageUploadField.css'

const ImageUploadField = (props) => {
    const [dragActive, setDragActive] = useState(false)
    const [imagePreview, setImagePreview] = useState(null)
    const [fileName, setFileName] = useState('')
    const fileInputRef = useRef(null)
    const handleFileSelect = (file) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePreview(e.target.result)
                setFileName(file.name)
                props.onChange(e.target.result) // ✅ AQUI: passa base64 (string)
            }
            reader.readAsDataURL(file)
        }
    }


    const handleInputChange = (event) => {
        const file = event.target.files[0]
        handleFileSelect(file)
    }

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(e.dataTransfer.files[0])
        }
    }

    const handleClick = () => {
        if (!imagePreview) {
            fileInputRef.current?.click()
        }
    }

    const handleRemoveImage = (e) => {
        e.stopPropagation()
        setImagePreview(null)
        setFileName('')
        props.onChange(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleChangeImage = () => {
        fileInputRef.current?.click()
    }

    // ✨ Aqui o efeito para resetar a imagem quando `resetTrigger` mudar
    useEffect(() => {
        if (props.resetTrigger) {
            handleRemoveImage({ stopPropagation: () => { } }) // simula o clique em remover
        }
    }, [props.resetTrigger])

    return (
        <div className="image-upload-field">
            <label className="image-upload-label">
                {props.label}
            </label>

            <div
                className={`image-upload-container ${dragActive ? 'drag-active' : ''} ${imagePreview ? 'has-image' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="image-input-hidden"
                    required={props.mandatory}
                />

                {imagePreview ? (
                    <>
                        <div className="image-preview-container">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="image-preview"
                            />
                        </div>

                        <div className="image-info">
                            <span className="image-name" title={fileName}>
                                {fileName}
                            </span>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                    type="button"
                                    className="change-image-btn"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleChangeImage()
                                    }}
                                    style={{
                                        background: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        padding: '4px 8px',
                                        fontSize: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Alterar
                                </button>
                                <button
                                    type="button"
                                    className="remove-image-btn"
                                    onClick={handleRemoveImage}
                                >
                                    Remover
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="upload-placeholder">
                        <div className="upload-icon">📷</div>
                        <div className="upload-text">
                            <p className="upload-main-text">Click to select or drag an image</p>
                            <p className="upload-sub-text">PNG, JPG, GIF até 10MB</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageUploadField
