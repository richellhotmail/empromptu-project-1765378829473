import React, { createContext, useContext, useEffect, useState } from 'react'

const DatabaseContext = createContext()

export function useDatabase() {
  const context = useContext(DatabaseContext)
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider')
  }
  return context
}

export function DatabaseProvider({ children }) {
  const [initialized, setInitialized] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // initializeDatabase()
  }, [])

  // const initializeDatabase = async () => {
  //   console.log("🔄 Initializing database schema...");
  //   const schema = {
  //     tables: [
  //       {
  //         name: 'companies',
  //         columns: [
  //           { name: 'company_code', type: 'VARCHAR(2)', nullable: false },
  //           { name: 'company_short_desc', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'company_long_desc', type: 'TEXT', nullable: true },
  //           { name: 'company_image', type: 'VARBINARY(MAX)', nullable: true },
  //           { name: 'enabled', type: 'BIT', nullable: false, default: '1' },
  //           { name: 'created_at', type: 'DATETIME2', default: 'GETUTCDATE()' },
  //           { name: 'updated_at', type: 'DATETIME2', default: 'GETUTCDATE()' }
  //         ]
  //       },
  //       {
  //         name: 'product_groups',
  //         columns: [
  //           { name: 'prod_grp_code', type: 'VARCHAR(2)', nullable: false },
  //           { name: 'prod_grp_short_desc', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'prod_grp_long_desc', type: 'TEXT', nullable: true },
  //           { name: 'prod_grp_image', type: 'VARBINARY(MAX)', nullable: true },
  //           { name: 'enabled', type: 'BIT', nullable: false, default: '1' },
  //           { name: 'created_at', type: 'DATETIME2', default: 'GETUTCDATE()' },
  //           { name: 'updated_at', type: 'DATETIME2', default: 'GETUTCDATE()' }
  //         ]
  //       },
  //       {
  //         name: 'products',
  //         columns: [
  //           { name: 'product_code', type: 'VARCHAR(5)', nullable: false },
  //           { name: 'product_short_desc', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'product_long_desc', type: 'TEXT', nullable: true },
  //           { name: 'product_image', type: 'VARBINARY(MAX)', nullable: true },
  //           { name: 'prod_grp_code', type: 'VARCHAR(3)', nullable: false },
  //           { name: 'price_zone_1', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_2', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_3', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_4', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_5', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_6', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_7', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_8', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_9', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'price_zone_10', type: 'NUMERIC(10,2)', nullable: true, default: '0' },
  //           { name: 'company_code', type: 'VARCHAR(2)', nullable: false },
  //           { name: 'enabled', type: 'BIT', nullable: false, default: '1' },
  //           { name: 'created_at', type: 'DATETIME2', default: 'GETUTCDATE()' },
  //           { name: 'updated_at', type: 'DATETIME2', default: 'GETUTCDATE()' }
  //         ]
  //       },
  //       {
  //         name: 'customer_groups',
  //         columns: [
  //           { name: 'cust_group_code', type: 'VARCHAR(3)', nullable: false },
  //           { name: 'cust_group_short_desc', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'cust_group_long_desc', type: 'TEXT', nullable: true },
  //           { name: 'cust_group_image', type: 'VARBINARY(MAX)', nullable: true },
  //           { name: 'company_code', type: 'VARCHAR(2)', nullable: false },
  //           { name: 'enabled', type: 'BIT', nullable: false, default: '1' },
  //           { name: 'created_at', type: 'DATETIME2', default: 'GETUTCDATE()' },
  //           { name: 'updated_at', type: 'DATETIME2', default: 'GETUTCDATE()' }
  //         ]
  //       },
  //       {
  //         name: 'customers',
  //         columns: [
  //           { name: 'customer_code', type: 'VARCHAR(6)', nullable: false },
  //           { name: 'customer_short_desc', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'customer_long_desc', type: 'TEXT', nullable: true },
  //           { name: 'customer_image', type: 'VARBINARY(MAX)', nullable: true },
  //           { name: 'cust_group_code', type: 'VARCHAR(3)', nullable: false },
  //           { name: 'company_code', type: 'VARCHAR(2)', nullable: false },
  //           { name: 'enabled', type: 'BIT', nullable: false, default: '1' },
  //           { name: 'created_at', type: 'DATETIME2', default: 'GETUTCDATE()' },
  //           { name: 'updated_at', type: 'DATETIME2', default: 'GETUTCDATE()' }
  //         ]
  //       },
  //       {
  //         name: 'audit_trail',
  //         columns: [
  //           { name: 'id', type: 'UNIQUEIDENTIFIER', nullable: false, default: 'NEWID()' },
  //           { name: 'table_name', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'record_id', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'action', type: 'VARCHAR(10)', nullable: false },
  //           { name: 'old_values', type: 'NVARCHAR(MAX)', nullable: true },
  //           { name: 'new_values', type: 'NVARCHAR(MAX)', nullable: true },
  //           { name: 'user_id', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'timestamp', type: 'DATETIME2', default: 'GETUTCDATE()' }
  //         ]
  //       },
  //       {
  //         name: 'users',
  //         columns: [
  //           { name: 'id', type: 'UNIQUEIDENTIFIER', nullable: false, default: 'NEWID()' },
  //           { name: 'username', type: 'VARCHAR(50)', nullable: false },
  //           { name: 'password_hash', type: 'VARCHAR(255)', nullable: false },
  //           { name: 'role', type: 'VARCHAR(20)', nullable: false },
  //           { name: 'name', type: 'VARCHAR(100)', nullable: false },
  //           { name: 'enabled', type: 'BIT', nullable: false, default: '1' },
  //           { name: 'created_at', type: 'DATETIME2', default: 'GETUTCDATE()' },
  //           { name: 'updated_at', type: 'DATETIME2', default: 'GETUTCDATE()' }
  //         ]
  //       }
  //     ]
  //   }

  //   try {
  //     const response = await fetch('http://localhost:3001/api/database/schema', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(schema)
  //     })
      
  //     const data = await response.json()
      
  //     if (data.success) {
  //       console.log('✅ Database schema initialized successfully')
  //       console.log('📊 Tables created:', schema.tables.map(t => t.name).join(', '))
  //       setInitialized(true)
  //     } else {
  //       console.error('❌ Failed to initialize database schema:', data.error)
  //       setError(data.error)
  //     }
  //   } catch (error) {
  //     console.error('❌ Error initializing database:', error.message)
  //     setError(error.message)
  //   }
  // }

  const query = async (sql, params = []) => {
    try {
      const response = await fetch('http://localhost:3001/api/database/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: sql,
          params
        })
      })
      
      const result = await response.json()
      
      if (!result.success) {
        console.error('❌ Query error:', result.error)
        throw new Error(result.error)
      }
      
      return result
    } catch (error) {
      console.error('Database query error:', error)
      throw error
    }
  }

  const logAudit = async (tableName, recordId, action, oldValues, newValues, userId) => {
    try {
      await query(
        `INSERT INTO audit_trail (table_name, record_id, action, old_values, new_values, user_id) 
         VALUES (@tableName, @recordId, @action, @oldValues, @newValues, @userId)`,
        { 
          tableName, 
          recordId, 
          action, 
          oldValues: JSON.stringify(oldValues), 
          newValues: JSON.stringify(newValues), 
          userId 
        }
      )
      console.log(`📝 Audit logged: ${action} on ${tableName}`)
    } catch (error) {
      console.error('Error logging audit trail:', error)
    }
  }

  const value = {
    query,
    logAudit,
    initialized,
    error
  }

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  )
}
