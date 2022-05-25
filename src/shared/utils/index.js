/**
 * A set of useful utilities.
 *
 * @since 0.4.0
 */

export const isClient = typeof window !== 'undefined'

export const html = document.documentElement

export const body = document.body

export const isString = v => typeof v === 'string'

export const isBoolean = v => typeof v === 'boolean'

export const isNumber = v => typeof v === 'number'

export const isArray = v => Array.isArray(v)

export const isObject = v => typeof v === 'object' && v !== null

export const isEvent = v => isObject(v) && v.target

export const isFunction = v => typeof v === 'function'

export const isSymbol = v => typeof v === 'symbol'

export const isNull = v => v === null

export const isUndefined = v => typeof v === 'undefined'

export const noop = () => {}

export const isEmpty = v => {
  return (
    (isString(v) && v.trim().length === 0) ||
    (isObject(v) && Object.keys(v).length === 0) ||
    (isArray(v) && v.length === 0) ||
    isNull(v) ||
    isUndefined(v) ||
    Number.isNaN(v)
  )
}
