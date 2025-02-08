import { type SchemaTypeDefinition } from 'sanity'
import { customer } from './customer'
import { user } from './user'
import {product} from './Products'
import {order} from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customer,product,order,user],
}
