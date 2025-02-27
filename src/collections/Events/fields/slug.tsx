'use client';

import React, { type ChangeEvent, type ReactElement, useEffect, useRef } from 'react';
import { TextInput, useField } from '@payloadcms/ui';
import { toKebabCase } from 'payload/shared';

export interface SlugInputProps {
  trackingField: string;
}

function SlugInput(props: SlugInputProps): ReactElement {
  const { trackingField } = props;

  const { value: slugValue = '', setValue: setSlugValue } = useField<string>({
    path: 'slug',
  })

  const { value: trackingFieldValue } = useField<string>({
    path: trackingField,
  })

  const prevTrackingFieldValueRef = useRef(trackingFieldValue)
  const stopTrackingRef = useRef(false)

  useEffect(() => {
    if (!trackingField || stopTrackingRef.current) {
      return;
    }
    if (trackingFieldValue === prevTrackingFieldValueRef.current) {
      return;
    }
    const prevSlugValue = toKebabCase(prevTrackingFieldValueRef.current || '') as string;

    prevTrackingFieldValueRef.current = trackingFieldValue;
    if (prevSlugValue !== slugValue) {
      return;
    }
    setSlugValue(toKebabCase(trackingFieldValue));
  }, [setSlugValue, slugValue, trackingField, trackingFieldValue]);

  return (
    <div>
      <TextInput
        path="slug"
        label="Slug"
        readOnly
        description={
          slugValue
            ? `Auto generated based on ${trackingField}`
            : `Will be auto-generated from ${trackingField} when saved`
        }
        value={slugValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSlugValue(e.target.value);
          stopTrackingRef.current = true;
        }}
      />
    </div>
  )
}

export { SlugInput }
