'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [type, setType] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }
    // file type image or video
    const file = files[0]
    const previewType = file.type.split('/')[0]
    const previewURL = URL.createObjectURL(file)

    setType(previewType)
    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*, video/*,.mkv"
        className="invisible h-0 w-0"
      />

      {preview && (
        <>
          {type === 'image' && (
            // eslint-disable-next-line
            <img
              src={preview}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />
          )}
          {type === 'video' && (
            <video
              src={preview}
              controls={true}
              className="aspect-video w-full rounded-lg object-cover"
            />
          )}
        </>
      )}
    </>
  )
}
