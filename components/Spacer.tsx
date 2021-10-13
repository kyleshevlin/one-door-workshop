import React from 'react'

type Margin = number | string

type SpacerProps = {
  children: React.ReactNode
  /**
   * Shorthand for applying margin to all sides
   */
  all?: Margin
  /**
   * Shorthand for applying margin to left and right sides
   */
  horz?: Margin
  /**
   * Shorthand for applying margin to top and bottom sides
   */
  vert?: Margin
  /**
   * Applies margin to the top
   */
  top?: Margin
  /**
   * Applies margin to the right
   */
  right?: Margin
  /**
   * Applies margin to the bottom
   */
  bottom?: Margin
  /**
   * Applies margin to the left
   */
  left?: Margin
}

export default function Spacer({
  children,
  all = 0,
  horz = 0,
  vert = 0,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
}: SpacerProps) {
  const margins = {
    ...(all && {
      marginTop: all,
      marginRight: all,
      marginBottom: all,
      marginLeft: all,
    }),
    ...(horz && {
      marginLeft: horz,
      marginRight: horz,
    }),
    ...(vert && {
      marginTop: vert,
      marginBottom: vert,
    }),
    ...(top && { marginTop: top }),
    ...(right && { marginRight: right }),
    ...(bottom && { marginBottom: bottom }),
    ...(left && { marginLeft: left }),
  }

  return <div style={margins}>{children}</div>
}
