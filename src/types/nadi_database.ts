export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  nadi_database: {
    Tables: {
      age_group: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      asset: {
        Row: {
          asset_group: string | null
          asset_mobility: string | null
          brand_id: number | null
          created_at: string | null
          created_by: string | null
          date_expired: string | null
          date_install: string | null
          date_waranty_supplier: string | null
          date_waranty_tp: string | null
          id: number
          is_active: boolean | null
          location_id: number | null
          name: string | null
          qty_unit: number | null
          remark: string | null
          serial_number: string | null
          site_id: number | null
          subtype_id: number | null
          type_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          asset_group?: string | null
          asset_mobility?: string | null
          brand_id?: number | null
          created_at?: string | null
          created_by?: string | null
          date_expired?: string | null
          date_install?: string | null
          date_waranty_supplier?: string | null
          date_waranty_tp?: string | null
          id: number
          is_active?: boolean | null
          location_id?: number | null
          name?: string | null
          qty_unit?: number | null
          remark?: string | null
          serial_number?: string | null
          site_id?: number | null
          subtype_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          asset_group?: string | null
          asset_mobility?: string | null
          brand_id?: number | null
          created_at?: string | null
          created_by?: string | null
          date_expired?: string | null
          date_install?: string | null
          date_waranty_supplier?: string | null
          date_waranty_tp?: string | null
          id?: number
          is_active?: boolean | null
          location_id?: number | null
          name?: string | null
          qty_unit?: number | null
          remark?: string | null
          serial_number?: string | null
          site_id?: number | null
          subtype_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "asset_asset_subtype_fk"
            columns: ["subtype_id"]
            isOneToOne: false
            referencedRelation: "asset_subtype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asset_asset_type_fk"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "asset_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asset_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asset_space_fk"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "space"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_attachment: {
        Row: {
          asset_id: number | null
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          asset_id?: number | null
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          asset_id?: number | null
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "asset_attachment_asset_fk"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "asset"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_categories: {
        Row: {
          id: number
          name: string | null
          remark: string
        }
        Insert: {
          id: number
          name?: string | null
          remark: string
        }
        Update: {
          id?: number
          name?: string | null
          remark?: string
        }
        Relationships: []
      }
      asset_subtype: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          name: string | null
          type_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          name?: string | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "asset_subtype_asset_type_fk"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "asset_type"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_type: {
        Row: {
          category_id: number | null
          created_at: string | null
          created_by: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_id: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_id?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "asset_type_asset_categories_fk"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "asset_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      bandwidth: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      bank_list: {
        Row: {
          bank_code: string | null
          bank_name: string | null
          id: number
        }
        Insert: {
          bank_code?: string | null
          bank_name?: string | null
          id: number
        }
        Update: {
          bank_code?: string | null
          bank_name?: string | null
          id?: number
        }
        Relationships: []
      }
      booking: {
        Row: {
          asset_id: number | null
          booking_end: string | null
          booking_start: string | null
          created_at: string | null
          created_by: string | null
          id: number
          requester_id: string | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          asset_id?: number | null
          booking_end?: string | null
          booking_start?: string | null
          created_at?: string | null
          created_by?: string | null
          id: number
          requester_id?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          asset_id?: number | null
          booking_end?: string | null
          booking_start?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          requester_id?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_asset_fk"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "asset"
            referencedColumns: ["id"]
          },
        ]
      }
      brand: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      building_level: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      building_type: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      candidate: {
        Row: {
          email: string | null
          fullname: string | null
          id: number
          mobile_no: string | null
          recuitment_id: number | null
          resume_path: string | null
        }
        Insert: {
          email?: string | null
          fullname?: string | null
          id: number
          mobile_no?: string | null
          recuitment_id?: number | null
          resume_path?: string | null
        }
        Update: {
          email?: string | null
          fullname?: string | null
          id?: number
          mobile_no?: string | null
          recuitment_id?: number | null
          resume_path?: string | null
        }
        Relationships: []
      }
      category_area: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      category_service: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      claim_application: {
        Row: {
          claim_status: boolean | null
          created_at: string | null
          created_by: string | null
          date_paid: string | null
          id: number
          month: number | null
          payment_status: boolean | null
          phase_id: number | null
          quarter: number | null
          ref_no: string | null
          refid_mcmc: number | null
          tp_dusp_id: number | null
          updated_at: string | null
          updated_by: string | null
          year: number | null
        }
        Insert: {
          claim_status?: boolean | null
          created_at?: string | null
          created_by?: string | null
          date_paid?: string | null
          id: number
          month?: number | null
          payment_status?: boolean | null
          phase_id?: number | null
          quarter?: number | null
          ref_no?: string | null
          refid_mcmc?: number | null
          tp_dusp_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          year?: number | null
        }
        Update: {
          claim_status?: boolean | null
          created_at?: string | null
          created_by?: string | null
          date_paid?: string | null
          id?: number
          month?: number | null
          payment_status?: boolean | null
          phase_id?: number | null
          quarter?: number | null
          ref_no?: string | null
          refid_mcmc?: number | null
          tp_dusp_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          year?: number | null
        }
        Relationships: []
      }
      claim_attachment: {
        Row: {
          claim_type_id: number | null
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          request_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          claim_type_id?: number | null
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          request_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          claim_type_id?: number | null
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          request_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      claim_categories: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      claim_items: {
        Row: {
          category_id: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      claim_location: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          is_active: boolean | null
          remark: string | null
          request_id: number | null
          site_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          is_active?: boolean | null
          remark?: string | null
          request_id?: number | null
          site_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          remark?: string | null
          request_id?: number | null
          site_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      claim_log: {
        Row: {
          claim_id: number | null
          created_at: string | null
          created_by: string | null
          id: number
          remark: string | null
          status_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          claim_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id: number
          remark?: string | null
          status_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          claim_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          remark?: string | null
          status_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      claim_request: {
        Row: {
          application_id: number | null
          category_id: number | null
          created_at: string | null
          created_by: string | null
          id: number
          item_id: number | null
          remark: string | null
          status_item: boolean | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          application_id?: number | null
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id: number
          item_id?: number | null
          remark?: string | null
          status_item?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          application_id?: number | null
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          item_id?: number | null
          remark?: string | null
          status_item?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      claim_status: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      claim_type: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      closure_affect_areas: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      closure_categories: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      closure_status: {
        Row: {
          id: number
          name: string | null
          remark: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          remark?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          remark?: string | null
        }
        Relationships: []
      }
      closure_subcategories: {
        Row: {
          bm: string | null
          category_id: number | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          category_id?: number | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          category_id?: number | null
          eng?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "closure_subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "closure_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      comment_votes: {
        Row: {
          comment_id: number | null
          created_at: string | null
          created_by: string | null
          id: number
          member_id: number | null
          updated_at: string | null
          updated_by: string | null
          vote_date: string | null
          vote_type: string | null
        }
        Insert: {
          comment_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id: number
          member_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          vote_date?: string | null
          vote_type?: string | null
        }
        Update: {
          comment_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          member_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          vote_date?: string | null
          vote_type?: string | null
        }
        Relationships: []
      }
      community_post: {
        Row: {
          content: string | null
          created_at: string | null
          created_by: string | null
          id: number
          image_url: string | null
          member_id: number | null
          post_date: string | null
          status: string | null
          title: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          id: number
          image_url?: string | null
          member_id?: number | null
          post_date?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          image_url?: string | null
          member_id?: number | null
          post_date?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      district: {
        Row: {
          code: number | null
          id: number
          name: string | null
          state_id: number
        }
        Insert: {
          code?: number | null
          id: number
          name?: string | null
          state_id: number
        }
        Update: {
          code?: number | null
          id?: number
          name?: string | null
          state_id?: number
        }
        Relationships: []
      }
      duns: {
        Row: {
          created_at: string | null
          created_by: string | null
          full_name: string | null
          id: number
          is_active: boolean | null
          name: string | null
          no_of_duns: number | null
          parliment_id: number | null
          refid: string | null
          states_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          full_name?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          no_of_duns?: number | null
          parliment_id?: number | null
          refid?: string | null
          states_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          full_name?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          no_of_duns?: number | null
          parliment_id?: number | null
          refid?: string | null
          states_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      dusp_profile: {
        Row: {
          created_at: string
          created_by: string | null
          dob: string | null
          dusp_id: number | null
          fullname: string
          ic_no: string
          id: number
          is_active: boolean | null
          join_date: string | null
          mobile_no: string
          position_id: number | null
          resign_date: string | null
          site_id: number | null
          updated_at: string
          updated_by: string | null
          user_id: number | null
          work_email: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          dob?: string | null
          dusp_id?: number | null
          fullname: string
          ic_no: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          mobile_no: string
          position_id?: number | null
          resign_date?: string | null
          site_id?: number | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          dob?: string | null
          dusp_id?: number | null
          fullname?: string
          ic_no?: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          mobile_no?: string
          position_id?: number | null
          resign_date?: string | null
          site_id?: number | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dusp_profile_dusp_id_fkey"
            columns: ["dusp_id"]
            isOneToOne: false
            referencedRelation: "service_provider"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dusp_profile_position_id_fkey"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dusp_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      dusp_tp: {
        Row: {
          dusp_id: number | null
          id: number
          tp_id: number | null
        }
        Insert: {
          dusp_id?: number | null
          id?: number
          tp_id?: number | null
        }
        Update: {
          dusp_id?: number | null
          id?: number
          tp_id?: number | null
        }
        Relationships: []
      }
      education: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      ethnics: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      event: {
        Row: {
          category_id: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          duration: number | null
          end_datetime: string | null
          id: number
          location_event: string | null
          module_id: number | null
          program_id: number | null
          program_method: number | null
          program_mode: number | null
          program_name: string | null
          requester_id: string | null
          site_id: number | null
          start_datetime: string | null
          status_id: number | null
          subcategory_id: number | null
          target_participant: number | null
          total_participant: number | null
          trainer_organization: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: number | null
          end_datetime?: string | null
          id: number
          location_event?: string | null
          module_id?: number | null
          program_id?: number | null
          program_method?: number | null
          program_mode?: number | null
          program_name?: string | null
          requester_id?: string | null
          site_id?: number | null
          start_datetime?: string | null
          status_id?: number | null
          subcategory_id?: number | null
          target_participant?: number | null
          total_participant?: number | null
          trainer_organization?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: number | null
          end_datetime?: string | null
          id?: number
          location_event?: string | null
          module_id?: number | null
          program_id?: number | null
          program_method?: number | null
          program_mode?: number | null
          program_name?: string | null
          requester_id?: string | null
          site_id?: number | null
          start_datetime?: string | null
          status_id?: number | null
          subcategory_id?: number | null
          target_participant?: number | null
          total_participant?: number | null
          trainer_organization?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_event_category_fk"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "event_category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_event_module_fk"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "event_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_event_program_fk"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "event_program"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_event_status_fk"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "event_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_event_subcategory_fk"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "event_subcategory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      event_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          event_id: number | null
          file_path: string | null
          id: number
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          file_path?: string | null
          id: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          file_path?: string | null
          id?: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_attachment_event_fk"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["id"]
          },
        ]
      }
      event_category: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      event_guest: {
        Row: {
          created_at: string | null
          created_by: string | null
          event_id: number | null
          id: number
          name: string | null
          organization: string | null
          position: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          id: number
          name?: string | null
          organization?: string | null
          position?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          id?: number
          name?: string | null
          organization?: string | null
          position?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_guest_event_fk"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["id"]
          },
        ]
      }
      event_log: {
        Row: {
          created_at: string | null
          created_by: string | null
          event_id: number | null
          id: number
          remark: string | null
          status_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          id: number
          remark?: string | null
          status_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          id?: number
          remark?: string | null
          status_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_log_event_fk"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_log_event_status_fk"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "event_status"
            referencedColumns: ["id"]
          },
        ]
      }
      event_module: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string | null
          program_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          program_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          program_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_module_event_module_fk"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "event_module"
            referencedColumns: ["id"]
          },
        ]
      }
      event_participant: {
        Row: {
          acceptance: boolean | null
          attendance: boolean | null
          created_at: string | null
          created_by: string | null
          event_id: number | null
          id: number
          member_id: number | null
          updated_at: string | null
          updated_by: string | null
          verified_by: string | null
        }
        Insert: {
          acceptance?: boolean | null
          attendance?: boolean | null
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          id: number
          member_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          verified_by?: string | null
        }
        Update: {
          acceptance?: boolean | null
          attendance?: boolean | null
          created_at?: string | null
          created_by?: string | null
          event_id?: number | null
          id?: number
          member_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_participant_event_fk"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_participant_member_fk"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "member_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      event_program: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string | null
          subcategory_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          subcategory_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          subcategory_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_program_event_subcategory_fk"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "event_subcategory"
            referencedColumns: ["id"]
          },
        ]
      }
      event_status: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      event_subcategory: {
        Row: {
          category_id: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_subcategory_event_category_fk"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "event_category"
            referencedColumns: ["id"]
          },
        ]
      }
      event_success_story: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          event_id: number | null
          id: number
          member_id: number | null
          remark: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          event_id?: number | null
          id: number
          member_id?: number | null
          remark?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          event_id?: number | null
          id?: number
          member_id?: number | null
          remark?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_success_story_event_fk"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_success_story_member_profle_fk"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "member_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      genders: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      group: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          group_name: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          group_name?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          group_name?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      group_role_permission: {
        Row: {
          created_at: string
          group_id: number | null
          id: number
          permission_id: number | null
          role_id: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          group_id?: number | null
          id?: number
          permission_id?: number | null
          role_id?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          group_id?: number | null
          id?: number
          permission_id?: number | null
          role_id?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "GROUP_ROLE_PERMISSION_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "user_group"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "GROUP_ROLE_PERMISSION_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "user_permission"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "GROUP_ROLE_PERMISSION_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "user_role"
            referencedColumns: ["id"]
          },
        ]
      }
      ict_knowledge: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      incident_type: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      income_levels: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      insurance_coverage_type: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      insurance_report: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          insurance_type_id: number | null
          report_detail: string | null
          site_remark_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          insurance_type_id?: number | null
          report_detail?: string | null
          site_remark_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          insurance_type_id?: number | null
          report_detail?: string | null
          site_remark_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      interview_panel: {
        Row: {
          id: number
          recuitment_id: number | null
          staff_id: number | null
        }
        Insert: {
          id: number
          recuitment_id?: number | null
          staff_id?: number | null
        }
        Update: {
          id?: number
          recuitment_id?: number | null
          staff_id?: number | null
        }
        Relationships: []
      }
      inventory: {
        Row: {
          barcode: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string | null
          price: number | null
          quantity: number | null
          type_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          barcode?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          name?: string | null
          price?: number | null
          quantity?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          barcode?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string | null
          price?: number | null
          quantity?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_inventory_type_fk"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "inventory_type"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          inventory_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          inventory_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          inventory_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_attachment_inventory_fk"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_type: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      kpi_audit_score: {
        Row: {
          audit_date: string | null
          id: number
          kpi_id: number | null
          score: number | null
          site_id: number | null
          user_id: string | null
        }
        Insert: {
          audit_date?: string | null
          id: number
          kpi_id?: number | null
          score?: number | null
          site_id?: number | null
          user_id?: string | null
        }
        Update: {
          audit_date?: string | null
          id?: number
          kpi_id?: number | null
          score?: number | null
          site_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kpi_audit_score_kpi_categories_fk"
            columns: ["kpi_id"]
            isOneToOne: false
            referencedRelation: "kpi_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kpi_audit_score_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      kpi_categories: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      kpi_criteria: {
        Row: {
          description: string | null
          id: number
          kpi_id: number | null
          max_score: number | null
          min_score: number | null
        }
        Insert: {
          description?: string | null
          id: number
          kpi_id?: number | null
          max_score?: number | null
          min_score?: number | null
        }
        Update: {
          description?: string | null
          id?: number
          kpi_id?: number | null
          max_score?: number | null
          min_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "kpi_criteria_kpi_categories_fk"
            columns: ["kpi_id"]
            isOneToOne: false
            referencedRelation: "kpi_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      leave_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          leave_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          leave_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          leave_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      leave_off_group: {
        Row: {
          id: number
          name: string | null
          status: boolean
        }
        Insert: {
          id: number
          name?: string | null
          status: boolean
        }
        Update: {
          id?: number
          name?: string | null
          status?: boolean
        }
        Relationships: []
      }
      leave_off_type: {
        Row: {
          color: string | null
          created_at: string | null
          id: number
          name: string | null
          position: number | null
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id: number
          name?: string | null
          position?: number | null
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          position?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      leave_public_holiday: {
        Row: {
          date: string | null
          desc: string | null
          id: number
          status: boolean
        }
        Insert: {
          date?: string | null
          desc?: string | null
          id: number
          status: boolean
        }
        Update: {
          date?: string | null
          desc?: string | null
          id?: number
          status?: boolean
        }
        Relationships: []
      }
      leave_public_holiday_state: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          public_holiday_id: number | null
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          public_holiday_id?: number | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          public_holiday_id?: number | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leave_public_holiday_state_leave_public_holiday_fk"
            columns: ["public_holiday_id"]
            isOneToOne: false
            referencedRelation: "leave_public_holiday"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leave_public_holiday_state_state_fk"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      leave_request: {
        Row: {
          created_at: string | null
          created_by: string | null
          end_date: string | null
          half_day: boolean | null
          id: number
          leave_status: number | null
          leave_type: number | null
          remark: string | null
          staff_id: number | null
          start_date: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          half_day?: boolean | null
          id: number
          leave_status?: number | null
          leave_type?: number | null
          remark?: string | null
          staff_id?: number | null
          start_date?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          half_day?: boolean | null
          id?: number
          leave_status?: number | null
          leave_type?: number | null
          remark?: string | null
          staff_id?: number | null
          start_date?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leave_request_leave_status_fk"
            columns: ["leave_status"]
            isOneToOne: false
            referencedRelation: "leave_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leave_request_leave_type_fk"
            columns: ["leave_type"]
            isOneToOne: false
            referencedRelation: "leave_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leave_request_staff_profile_fk"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      leave_status: {
        Row: {
          color: string | null
          color_code: string | null
          created_at: string | null
          desc: string | null
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          color_code?: string | null
          created_at?: string | null
          desc?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          color_code?: string | null
          created_at?: string | null
          desc?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      leave_type: {
        Row: {
          attachment: boolean
          code: string | null
          color_code: string | null
          created_at: string | null
          id: number
          name: string | null
          total: number | null
          updated_at: string | null
        }
        Insert: {
          attachment: boolean
          code?: string | null
          color_code?: string | null
          created_at?: string | null
          id: number
          name?: string | null
          total?: number | null
          updated_at?: string | null
        }
        Update: {
          attachment?: boolean
          code?: string | null
          color_code?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          total?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      maintenance_request: {
        Row: {
          asset_id: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          requester_by: string | null
          status: boolean | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          asset_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          requester_by?: string | null
          status?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          asset_id?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          requester_by?: string | null
          status?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "maintenance_request_asset_fk"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "asset"
            referencedColumns: ["id"]
          },
        ]
      }
      marital_status: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      mcmc_lookup: {
        Row: {
          created_at: string | null
          created_by: string | null
          fullname: string | null
          id: number
          name: string | null
          site_id: number | null
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          fullname?: string | null
          id: number
          name?: string | null
          site_id?: number | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          fullname?: string | null
          id?: number
          name?: string | null
          site_id?: number | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mcmc_lookup_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mcmc_lookup_state_fk"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      mcmc_profile: {
        Row: {
          created_at: string
          created_by: string | null
          fullname: string
          ic_no: string
          id: number
          is_active: boolean | null
          mobile_no: string
          position_id: number | null
          updated_at: string
          updated_by: string | null
          user_id: number | null
          work_email: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          fullname: string
          ic_no: string
          id?: number
          is_active?: boolean | null
          mobile_no: string
          position_id?: number | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          fullname?: string
          ic_no?: string
          id?: number
          is_active?: boolean | null
          mobile_no?: string
          position_id?: number | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mcmc_profile_position_id_fkey"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mcmc_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      member_address: {
        Row: {
          address1: string | null
          address2: string | null
          city: string | null
          created_at: string | null
          created_by: string | null
          district_id: number | null
          id: number
          member_id: number | null
          postcode: string | null
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          district_id?: number | null
          id: number
          member_id?: number | null
          postcode?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          district_id?: number | null
          id?: number
          member_id?: number | null
          postcode?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "member_address_district_fk"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "district"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "member_address_member_profle_fk"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "member_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "member_address_state_fk"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      member_health: {
        Row: {
          agree_declare: boolean | null
          allergy: string | null
          allergy_detail: string | null
          blood_sugar: number | null
          bmi: number | null
          cholestrol: number | null
          created_at: string | null
          created_by: string | null
          diastolic: number | null
          health_cond: string | null
          health_detail: string | null
          height: number | null
          id: number
          member_id: number | null
          pdpa_declare: boolean | null
          pulse: number | null
          systolic: number | null
          updated_at: string | null
          updated_by: string | null
          weight: number | null
        }
        Insert: {
          agree_declare?: boolean | null
          allergy?: string | null
          allergy_detail?: string | null
          blood_sugar?: number | null
          bmi?: number | null
          cholestrol?: number | null
          created_at?: string | null
          created_by?: string | null
          diastolic?: number | null
          health_cond?: string | null
          health_detail?: string | null
          height?: number | null
          id: number
          member_id?: number | null
          pdpa_declare?: boolean | null
          pulse?: number | null
          systolic?: number | null
          updated_at?: string | null
          updated_by?: string | null
          weight?: number | null
        }
        Update: {
          agree_declare?: boolean | null
          allergy?: string | null
          allergy_detail?: string | null
          blood_sugar?: number | null
          bmi?: number | null
          cholestrol?: number | null
          created_at?: string | null
          created_by?: string | null
          diastolic?: number | null
          health_cond?: string | null
          health_detail?: string | null
          height?: number | null
          id?: number
          member_id?: number | null
          pdpa_declare?: boolean | null
          pulse?: number | null
          systolic?: number | null
          updated_at?: string | null
          updated_by?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "member_health_member_profle_fk"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "member_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      member_profile: {
        Row: {
          age: number | null
          agree_declare: boolean | null
          community_status: boolean
          created_at: string | null
          created_by: string | null
          distance: number | null
          dob: string | null
          education_level: number | null
          email: string | null
          ethnic_id: number | null
          fullname: string | null
          gender: number
          ict_knowledge: number | null
          id: number
          identity_no: string
          income_range: number | null
          join_date: string | null
          mobile_no: string | null
          occupation_id: number | null
          oku_status: boolean | null
          pdpa_declare: boolean | null
          race_id: number | null
          ref_id: number
          register_method: string | null
          socio_id: number | null
          status_entrepreneur: boolean | null
          status_membership: number | null
          supervision: string | null
          type_membership: number
          type_sector: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          age?: number | null
          agree_declare?: boolean | null
          community_status: boolean
          created_at?: string | null
          created_by?: string | null
          distance?: number | null
          dob?: string | null
          education_level?: number | null
          email?: string | null
          ethnic_id?: number | null
          fullname?: string | null
          gender: number
          ict_knowledge?: number | null
          id?: never
          identity_no: string
          income_range?: number | null
          join_date?: string | null
          mobile_no?: string | null
          occupation_id?: number | null
          oku_status?: boolean | null
          pdpa_declare?: boolean | null
          race_id?: number | null
          ref_id: number
          register_method?: string | null
          socio_id?: number | null
          status_entrepreneur?: boolean | null
          status_membership?: number | null
          supervision?: string | null
          type_membership: number
          type_sector?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          age?: number | null
          agree_declare?: boolean | null
          community_status?: boolean
          created_at?: string | null
          created_by?: string | null
          distance?: number | null
          dob?: string | null
          education_level?: number | null
          email?: string | null
          ethnic_id?: number | null
          fullname?: string | null
          gender?: number
          ict_knowledge?: number | null
          id?: never
          identity_no?: string
          income_range?: number | null
          join_date?: string | null
          mobile_no?: string | null
          occupation_id?: number | null
          oku_status?: boolean | null
          pdpa_declare?: boolean | null
          race_id?: number | null
          ref_id?: number
          register_method?: string | null
          socio_id?: number | null
          status_entrepreneur?: boolean | null
          status_membership?: number | null
          supervision?: string | null
          type_membership?: number
          type_sector?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "member_site_profile_fk"
            columns: ["ref_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      mukims: {
        Row: {
          code: string | null
          created_at: string | null
          created_by: string | null
          district_id: number | null
          id: number
          is_active: boolean | null
          name: string | null
          states_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          district_id?: number | null
          id: number
          is_active?: boolean | null
          name?: string | null
          states_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          district_id?: number | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          states_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mukims_district_fk"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "district"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mukims_state_fk"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      nationalities: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      nms: {
        Row: {
          created_by: string | null
          date_time: string | null
          id: number
          pilm_refid: string | null
          service_provider: number | null
          throughput: number | null
          uptime: number | null
          utilization: number | null
        }
        Insert: {
          created_by?: string | null
          date_time?: string | null
          id: number
          pilm_refid?: string | null
          service_provider?: number | null
          throughput?: number | null
          uptime?: number | null
          utilization?: number | null
        }
        Update: {
          created_by?: string | null
          date_time?: string | null
          id?: number
          pilm_refid?: string | null
          service_provider?: number | null
          throughput?: number | null
          uptime?: number | null
          utilization?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nms_dusp_profile_fk"
            columns: ["service_provider"]
            isOneToOne: false
            referencedRelation: "dusp_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      occupation: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      parliaments: {
        Row: {
          created_at: string | null
          created_by: string | null
          fullname: string | null
          id: number
          is_active: boolean | null
          name: string | null
          refid: string | null
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          fullname?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          refid?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          fullname?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          refid?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parliaments_state_fk"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      part_time_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          document_type: string | null
          file_path: string | null
          id: number
          part_time_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          document_type?: string | null
          file_path?: string | null
          id: number
          part_time_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          document_type?: string | null
          file_path?: string | null
          id?: number
          part_time_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "part_time_attachment_part_time_staff_fk"
            columns: ["part_time_id"]
            isOneToOne: false
            referencedRelation: "part_time_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      part_time_schedule: {
        Row: {
          created_at: string | null
          created_by: string | null
          date_work: string | null
          id: number
          part_time_id: number | null
          shift_end: string | null
          shift_start: string | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date_work?: string | null
          id: number
          part_time_id?: number | null
          shift_end?: string | null
          shift_start?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date_work?: string | null
          id?: number
          part_time_id?: number | null
          shift_end?: string | null
          shift_start?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "part_time_schedule_part_time_staff_fk"
            columns: ["part_time_id"]
            isOneToOne: false
            referencedRelation: "part_time_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      part_time_staff: {
        Row: {
          contract_end: string | null
          contract_start: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          ic_no: string | null
          id: number
          mobile_no: string | null
          name: string | null
          reason: string | null
          site_id: number | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          ic_no?: string | null
          id: number
          mobile_no?: string | null
          name?: string | null
          reason?: string | null
          site_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          ic_no?: string | null
          id?: number
          mobile_no?: string | null
          name?: string | null
          reason?: string | null
          site_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "part_time_staff_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      permission: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          permission_name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          permission_name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          permission_name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      phases: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      pos_service: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          pos_id: number | null
          quantity: number | null
          service_id: number | null
          total_amout: number | null
          transaction_date: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          pos_id?: number | null
          quantity?: number | null
          service_id?: number | null
          total_amout?: number | null
          transaction_date?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          pos_id?: number | null
          quantity?: number | null
          service_id?: number | null
          total_amout?: number | null
          transaction_date?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pos_service_pos_transaction_fk"
            columns: ["pos_id"]
            isOneToOne: false
            referencedRelation: "pos_transaction"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pos_service_service_fk"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "service"
            referencedColumns: ["id"]
          },
        ]
      }
      pos_transaction: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          member_id: number | null
          transaction_date: string | null
          type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          member_id?: number | null
          transaction_date?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          member_id?: number | null
          transaction_date?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pos_transaction_member_profle_fk"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "member_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      pos_transaction_item: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          item_id: number | null
          price_per_unit: number | null
          quantity: number | null
          total_price: number | null
          transaction_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          item_id?: number | null
          price_per_unit?: number | null
          quantity?: number | null
          total_price?: number | null
          transaction_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          item_id?: number | null
          price_per_unit?: number | null
          quantity?: number | null
          total_price?: number | null
          transaction_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pos_transaction_item_inventory_fk"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pos_transaction_item_pos_transaction_fk"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "pos_transaction"
            referencedColumns: ["id"]
          },
        ]
      }
      position: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      post_comment: {
        Row: {
          comment_date: string | null
          comment_text: string | null
          created_at: string | null
          created_by: string | null
          id: number
          member_id: number | null
          post_id: number | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          comment_date?: string | null
          comment_text?: string | null
          created_at?: string | null
          created_by?: string | null
          id: number
          member_id?: number | null
          post_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          comment_date?: string | null
          comment_text?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          member_id?: number | null
          post_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      post_report: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          member_id: number | null
          post_id: number | null
          report_reason: string | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          member_id?: number | null
          post_id?: number | null
          report_reason?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          member_id?: number | null
          post_id?: number | null
          report_reason?: string | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      post_votes: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          member_id: number | null
          post_id: number | null
          updated_at: string | null
          updated_by: string | null
          vote_date: string | null
          vote_type: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          member_id?: number | null
          post_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          vote_date?: string | null
          vote_type?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          member_id?: number | null
          post_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          vote_date?: string | null
          vote_type?: string | null
        }
        Relationships: []
      }
      program_method: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      program_mode: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      races: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
          registered_by: string | null
          registered_date: number | null
          status: number | null
          updated_epochmillis: number | null
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
          registered_by?: string | null
          registered_date?: number | null
          status?: number | null
          updated_epochmillis?: number | null
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
          registered_by?: string | null
          registered_date?: number | null
          status?: number | null
          updated_epochmillis?: number | null
        }
        Relationships: []
      }
      recruitment_appointment: {
        Row: {
          candidate_id: number | null
          hire_start_date: string | null
          id: number
          interview_date: string | null
          panel_id: number | null
          position_id: number | null
          site_id: number | null
          state_id: number | null
          status_id: number | null
        }
        Insert: {
          candidate_id?: number | null
          hire_start_date?: string | null
          id: number
          interview_date?: string | null
          panel_id?: number | null
          position_id?: number | null
          site_id?: number | null
          state_id?: number | null
          status_id?: number | null
        }
        Update: {
          candidate_id?: number | null
          hire_start_date?: string | null
          id?: number
          interview_date?: string | null
          panel_id?: number | null
          position_id?: number | null
          site_id?: number | null
          state_id?: number | null
          status_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "recruitment_appointment_candidates_fk"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidate"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_appointment_interview_panel_fk"
            columns: ["panel_id"]
            isOneToOne: false
            referencedRelation: "interview_panel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_appointment_position_fk"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_appointment_recruitment_status_fk"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "recruitment_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_appointment_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_appointment_state_fk"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      recruitment_status: {
        Row: {
          id: number
          status_name: string | null
        }
        Insert: {
          id: number
          status_name?: string | null
        }
        Update: {
          id?: number
          status_name?: string | null
        }
        Relationships: []
      }
      region: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      religion: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      roles: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      service: {
        Row: {
          category_service: number | null
          created_at: string | null
          created_by: string | null
          id: number
          service_charge: number | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category_service?: number | null
          created_at?: string | null
          created_by?: string | null
          id: number
          service_charge?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category_service?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          service_charge?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_category_service_fk"
            columns: ["category_service"]
            isOneToOne: false
            referencedRelation: "category_service"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_service_charge_fk"
            columns: ["service_charge"]
            isOneToOne: false
            referencedRelation: "service_charge"
            referencedColumns: ["id"]
          },
        ]
      }
      service_charge: {
        Row: {
          category_id: number | null
          description: string | null
          fee: number | null
          id: number
        }
        Insert: {
          category_id?: number | null
          description?: string | null
          fee?: number | null
          id?: number
        }
        Update: {
          category_id?: number | null
          description?: string | null
          fee?: number | null
          id?: number
        }
        Relationships: []
      }
      service_provider: {
        Row: {
          code: string | null
          id: number
          name: string | null
        }
        Insert: {
          code?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          code?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      site: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          refid_mcmc: number | null
          refid_tp: number | null
          site_profile_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          refid_mcmc?: number | null
          refid_tp?: number | null
          site_profile_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          refid_mcmc?: number | null
          refid_tp?: number | null
          site_profile_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      site_address: {
        Row: {
          active_status: number | null
          address1: string | null
          address2: string | null
          city: string | null
          created_at: string | null
          created_by: string | null
          district_id: number | null
          id: number
          postcode: string | null
          remark: string | null
          site_id: number | null
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          active_status?: number | null
          address1?: string | null
          address2?: string | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          district_id?: number | null
          id?: never
          postcode?: string | null
          remark?: string | null
          site_id?: number | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          active_status?: number | null
          address1?: string | null
          address2?: string | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          district_id?: number | null
          id?: never
          postcode?: string | null
          remark?: string | null
          site_id?: number | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_address_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      site_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          site_remark_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          site_remark_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          site_remark_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_attachment_site_remark_fk"
            columns: ["site_remark_id"]
            isOneToOne: false
            referencedRelation: "site_remark"
            referencedColumns: ["id"]
          },
        ]
      }
      site_closure: {
        Row: {
          affected_areas_id: number | null
          category_id: number | null
          close_end: string | null
          close_start: string | null
          created_at: string | null
          created_by: string | null
          duration: number | null
          id: number
          remark: string | null
          session: string | null
          site_id: number | null
          status: string | null
          subcategory_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          affected_areas_id?: number | null
          category_id?: number | null
          close_end?: string | null
          close_start?: string | null
          created_at?: string | null
          created_by?: string | null
          duration?: number | null
          id: number
          remark?: string | null
          session?: string | null
          site_id?: number | null
          status?: string | null
          subcategory_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          affected_areas_id?: number | null
          category_id?: number | null
          close_end?: string | null
          close_start?: string | null
          created_at?: string | null
          created_by?: string | null
          duration?: number | null
          id?: number
          remark?: string | null
          session?: string | null
          site_id?: number | null
          status?: string | null
          subcategory_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_closure_closure_affect_areas_fk"
            columns: ["affected_areas_id"]
            isOneToOne: false
            referencedRelation: "closure_affect_areas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "site_closure_closure_categories_fk"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "closure_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "site_closure_closure_subcategories_fk"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "closure_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "site_closure_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      site_contracts: {
        Row: {
          contract_end: string | null
          contract_start: string | null
          created_at: string | null
          created_by: string | null
          id: number
          is_active: boolean | null
          remark: string | null
          site_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by?: string | null
          id: number
          is_active?: boolean | null
          remark?: string | null
          site_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          remark?: string | null
          site_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_contracts_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      site_operation: {
        Row: {
          close_time: string | null
          created_at: string | null
          created_by: string | null
          days_of_week: string | null
          id: number
          is_closed: boolean | null
          open_time: string | null
          site_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          close_time?: string | null
          created_at?: string | null
          created_by?: string | null
          days_of_week?: string | null
          id: number
          is_closed?: boolean | null
          open_time?: string | null
          site_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          close_time?: string | null
          created_at?: string | null
          created_by?: string | null
          days_of_week?: string | null
          id?: number
          is_closed?: boolean | null
          open_time?: string | null
          site_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_operation_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      site_profile: {
        Row: {
          active_status: number | null
          area_id: number | null
          bandwidth: number | null
          building_rental_id: number | null
          building_type_id: number | null
          cluster_id: number | null
          created_at: string | null
          created_by: string | null
          dun_rfid: number | null
          dusp_tp_id: number | null
          email: string | null
          fullname: string | null
          id: number
          latitude: string | null
          level_id: number | null
          longtitude: string | null
          mukim_id: number | null
          oku_friendly: boolean | null
          operate_date: string | null
          parliament_rfid: number | null
          phase_id: number | null
          ref_id: string
          region_id: number | null
          remark: string | null
          sitename: string | null
          socioeconomic_id: number | null
          space_id: number | null
          state_id: number | null
          technology: number | null
          total_population: number | null
          updated_at: string | null
          updated_by: string | null
          ust_id: number | null
          website: string | null
          zone_id: number | null
        }
        Insert: {
          active_status?: number | null
          area_id?: number | null
          bandwidth?: number | null
          building_rental_id?: number | null
          building_type_id?: number | null
          cluster_id?: number | null
          created_at?: string | null
          created_by?: string | null
          dun_rfid?: number | null
          dusp_tp_id?: number | null
          email?: string | null
          fullname?: string | null
          id?: never
          latitude?: string | null
          level_id?: number | null
          longtitude?: string | null
          mukim_id?: number | null
          oku_friendly?: boolean | null
          operate_date?: string | null
          parliament_rfid?: number | null
          phase_id?: number | null
          ref_id: string
          region_id?: number | null
          remark?: string | null
          sitename?: string | null
          socioeconomic_id?: number | null
          space_id?: number | null
          state_id?: number | null
          technology?: number | null
          total_population?: number | null
          updated_at?: string | null
          updated_by?: string | null
          ust_id?: number | null
          website?: string | null
          zone_id?: number | null
        }
        Update: {
          active_status?: number | null
          area_id?: number | null
          bandwidth?: number | null
          building_rental_id?: number | null
          building_type_id?: number | null
          cluster_id?: number | null
          created_at?: string | null
          created_by?: string | null
          dun_rfid?: number | null
          dusp_tp_id?: number | null
          email?: string | null
          fullname?: string | null
          id?: never
          latitude?: string | null
          level_id?: number | null
          longtitude?: string | null
          mukim_id?: number | null
          oku_friendly?: boolean | null
          operate_date?: string | null
          parliament_rfid?: number | null
          phase_id?: number | null
          ref_id?: string
          region_id?: number | null
          remark?: string | null
          sitename?: string | null
          socioeconomic_id?: number | null
          space_id?: number | null
          state_id?: number | null
          technology?: number | null
          total_population?: number | null
          updated_at?: string | null
          updated_by?: string | null
          ust_id?: number | null
          website?: string | null
          zone_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "site_profile_dusp_tp_fk"
            columns: ["dusp_tp_id"]
            isOneToOne: false
            referencedRelation: "dusp_tp"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "site_profile_phases_fk"
            columns: ["phase_id"]
            isOneToOne: false
            referencedRelation: "phases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "site_profile_region_fk"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "site_profile_state_fk"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      site_remark: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          site_id: number | null
          type_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          site_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          site_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_remark_incident_type_fk"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "incident_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "site_remark_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      site_status: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      sla_categories: {
        Row: {
          id: number
          max_day: number | null
          min_day: number | null
          name: string | null
        }
        Insert: {
          id: number
          max_day?: number | null
          min_day?: number | null
          name?: string | null
        }
        Update: {
          id?: number
          max_day?: number | null
          min_day?: number | null
          name?: string | null
        }
        Relationships: []
      }
      socioeconomics: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
          sector_id: number | null
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
          sector_id?: number | null
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
          sector_id?: number | null
        }
        Relationships: []
      }
      space: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      sso_profile: {
        Row: {
          created_at: string
          created_by: string | null
          fullname: string
          ic_no: string
          id: number
          is_active: boolean | null
          join_date: string | null
          mobile_no: string
          position_id: number | null
          resign_date: string | null
          updated_at: string
          updated_by: string | null
          user_id: number | null
          work_email: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          fullname: string
          ic_no: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          mobile_no: string
          position_id?: number | null
          resign_date?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          fullname?: string
          ic_no?: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          mobile_no?: string
          position_id?: number | null
          resign_date?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sso_profile_position_id_fkey"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sso_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_address: {
        Row: {
          address1: string
          address2: string | null
          city: string
          created_at: string | null
          created_by: string
          district_id: number | null
          ic_no: string
          id: number
          is_active: boolean | null
          postcode: string
          remark: string | null
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          address1: string
          address2?: string | null
          city: string
          created_at?: string | null
          created_by: string
          district_id?: number | null
          ic_no: string
          id?: never
          is_active?: boolean | null
          postcode: string
          remark?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          address1?: string
          address2?: string | null
          city?: string
          created_at?: string | null
          created_by?: string
          district_id?: number | null
          ic_no?: string
          id?: never
          is_active?: boolean | null
          postcode?: string
          remark?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      staff_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          letter_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          letter_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          letter_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_attachment_staff_letter_fk"
            columns: ["letter_id"]
            isOneToOne: false
            referencedRelation: "staff_letter"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_attendance: {
        Row: {
          address: string | null
          attend_date: string | null
          attendance_type: number | null
          check_in: string | null
          check_out: string | null
          created_at: string | null
          created_by: string | null
          id: number
          latitude: number | null
          longtitude: number | null
          photo_path: string | null
          remark: string | null
          site_id: number | null
          staff_id: number | null
          status: boolean | null
          total_working_hour: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          address?: string | null
          attend_date?: string | null
          attendance_type?: number | null
          check_in?: string | null
          check_out?: string | null
          created_at?: string | null
          created_by?: string | null
          id: number
          latitude?: number | null
          longtitude?: number | null
          photo_path?: string | null
          remark?: string | null
          site_id?: number | null
          staff_id?: number | null
          status?: boolean | null
          total_working_hour?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          address?: string | null
          attend_date?: string | null
          attendance_type?: number | null
          check_in?: string | null
          check_out?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          latitude?: number | null
          longtitude?: number | null
          photo_path?: string | null
          remark?: string | null
          site_id?: number | null
          staff_id?: number | null
          status?: boolean | null
          total_working_hour?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_attendance_staff_profile_fk"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_contact: {
        Row: {
          created_at: string | null
          created_by: string | null
          full_name: string | null
          ic_no: string | null
          id: number
          mobile_no: string | null
          relationship_id: number | null
          total_children: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          full_name?: string | null
          ic_no?: string | null
          id?: number
          mobile_no?: string | null
          relationship_id?: number | null
          total_children?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          full_name?: string | null
          ic_no?: string | null
          id?: number
          mobile_no?: string | null
          relationship_id?: number | null
          total_children?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "STAFF_CONTACT_relationship_id_fkey"
            columns: ["relationship_id"]
            isOneToOne: false
            referencedRelation: "type_relationship"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_contract: {
        Row: {
          contract_end: string | null
          contract_start: string | null
          created_at: string | null
          created_by: string | null
          duration: string | null
          id: number
          is_active: boolean | null
          remark: string | null
          site_id: number | null
          staff_id: number | null
          updated_at: string | null
          updated_by: string | null
          user_id: number | null
        }
        Insert: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by?: string | null
          duration?: string | null
          id: number
          is_active?: boolean | null
          remark?: string | null
          site_id?: number | null
          staff_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: number | null
        }
        Update: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by?: string | null
          duration?: string | null
          id?: number
          is_active?: boolean | null
          remark?: string | null
          site_id?: number | null
          staff_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_contract_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_contract_staff_profile_fk"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_contract_user_profile_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_job: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          is_active: boolean | null
          join_date: string | null
          position_id: number | null
          resign_date: string | null
          site_id: number | null
          staff_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          is_active?: boolean | null
          join_date?: string | null
          position_id?: number | null
          resign_date?: string | null
          site_id?: number | null
          staff_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          position_id?: number | null
          resign_date?: string | null
          site_id?: number | null
          staff_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_job_position_fk"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_job_site_profile_fk"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "site_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_job_staff_profile_fk"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_letter: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          letter_date: string | null
          letter_type: string | null
          notes: string | null
          notify_email: boolean | null
          reminder_no: number | null
          staff_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          letter_date?: string | null
          letter_type?: string | null
          notes?: string | null
          notify_email?: boolean | null
          reminder_no?: number | null
          staff_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          letter_date?: string | null
          letter_type?: string | null
          notes?: string | null
          notify_email?: boolean | null
          reminder_no?: number | null
          staff_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_letter_staff_profile_fk"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_pay_info: {
        Row: {
          bank_acc_no: string | null
          bank_id: number | null
          basic_pay: number | null
          created_at: string | null
          created_by: string | null
          epf_no: string | null
          id: number
          socso_no: string | null
          tax_no: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          bank_acc_no?: string | null
          bank_id?: number | null
          basic_pay?: number | null
          created_at?: string | null
          created_by?: string | null
          epf_no?: string | null
          id: number
          socso_no?: string | null
          tax_no?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          bank_acc_no?: string | null
          bank_id?: number | null
          basic_pay?: number | null
          created_at?: string | null
          created_by?: string | null
          epf_no?: string | null
          id?: number
          socso_no?: string | null
          tax_no?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_pay_info_bank_list_fk"
            columns: ["bank_id"]
            isOneToOne: false
            referencedRelation: "bank_list"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_payroll: {
        Row: {
          basic_pay: number | null
          basic_rate: number | null
          created_at: string | null
          created_by: string
          epf_deduction: number | null
          gross_pay: number | null
          ic_no: string
          id: number
          net_pay: number | null
          payroll_date: string | null
          staff_eis: number | null
          staff_epf: number | null
          staff_socso: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          basic_pay?: number | null
          basic_rate?: number | null
          created_at?: string | null
          created_by: string
          epf_deduction?: number | null
          gross_pay?: number | null
          ic_no: string
          id?: never
          net_pay?: number | null
          payroll_date?: string | null
          staff_eis?: number | null
          staff_epf?: number | null
          staff_socso?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          basic_pay?: number | null
          basic_rate?: number | null
          created_at?: string | null
          created_by?: string
          epf_deduction?: number | null
          gross_pay?: number | null
          ic_no?: string
          id?: never
          net_pay?: number | null
          payroll_date?: string | null
          staff_eis?: number | null
          staff_epf?: number | null
          staff_socso?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      staff_photo: {
        Row: {
          created_at: string
          ext: string | null
          id: number
          is_active: boolean | null
          photo: string | null
          photo_thumb: string | null
          size: string | null
          staff_id: number | null
          updated_at: string
          user_id: number | null
        }
        Insert: {
          created_at?: string
          ext?: string | null
          id?: number
          is_active?: boolean | null
          photo?: string | null
          photo_thumb?: string | null
          size?: string | null
          staff_id?: number | null
          updated_at?: string
          user_id?: number | null
        }
        Update: {
          created_at?: string
          ext?: string | null
          id?: number
          is_active?: boolean | null
          photo?: string | null
          photo_thumb?: string | null
          size?: string | null
          staff_id?: number | null
          updated_at?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_photo_staff_profile_fk"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "STAFF_PHOTO_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_profile: {
        Row: {
          created_at: string
          created_by: string | null
          dob: string | null
          fullname: string
          gender_id: number | null
          ic_no: string
          id: number
          is_active: boolean | null
          join_date: string | null
          marital_status: number | null
          mobile_no: string
          nationality_id: number | null
          personal_email: string | null
          place_of_birth: string | null
          position_id: number | null
          qualification: string | null
          race_id: number | null
          religion_id: number | null
          resign_date: string | null
          site_id: number | null
          updated_at: string
          updated_by: string | null
          work_email: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          dob?: string | null
          fullname: string
          gender_id?: number | null
          ic_no: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          marital_status?: number | null
          mobile_no: string
          nationality_id?: number | null
          personal_email?: string | null
          place_of_birth?: string | null
          position_id?: number | null
          qualification?: string | null
          race_id?: number | null
          religion_id?: number | null
          resign_date?: string | null
          site_id?: number | null
          updated_at?: string
          updated_by?: string | null
          work_email?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          dob?: string | null
          fullname?: string
          gender_id?: number | null
          ic_no?: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          marital_status?: number | null
          mobile_no?: string
          nationality_id?: number | null
          personal_email?: string | null
          place_of_birth?: string | null
          position_id?: number | null
          qualification?: string | null
          race_id?: number | null
          religion_id?: number | null
          resign_date?: string | null
          site_id?: number | null
          updated_at?: string
          updated_by?: string | null
          work_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_profile_gender_fk"
            columns: ["gender_id"]
            isOneToOne: false
            referencedRelation: "genders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "STAFF_PROFILE_marital_status_fkey"
            columns: ["marital_status"]
            isOneToOne: false
            referencedRelation: "marital_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_profile_nationalities_fk"
            columns: ["nationality_id"]
            isOneToOne: false
            referencedRelation: "nationalities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "STAFF_PROFILE_position_id_fkey"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_profile_races_fk"
            columns: ["race_id"]
            isOneToOne: false
            referencedRelation: "races"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_profile_religion_fk"
            columns: ["religion_id"]
            isOneToOne: false
            referencedRelation: "religion"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_taining_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          staff_training_id: number | null
          type: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          staff_training_id?: number | null
          type?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          staff_training_id?: number | null
          type?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_taining_attachment_staff_training_fk"
            columns: ["staff_training_id"]
            isOneToOne: false
            referencedRelation: "staff_training"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_training: {
        Row: {
          acceptance: boolean | null
          attendance: boolean | null
          created_at: string | null
          created_by: string | null
          id: number
          staff_id: number | null
          training_id: number | null
          updated_at: string | null
          updated_by: string | null
          verified_tp: string | null
        }
        Insert: {
          acceptance?: boolean | null
          attendance?: boolean | null
          created_at?: string | null
          created_by?: string | null
          id: number
          staff_id?: number | null
          training_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          verified_tp?: string | null
        }
        Update: {
          acceptance?: boolean | null
          attendance?: boolean | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          staff_id?: number | null
          training_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          verified_tp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_training_staff_profile_fk"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_training_training_fk"
            columns: ["training_id"]
            isOneToOne: false
            referencedRelation: "training"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_training_cert: {
        Row: {
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          staff_training_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          staff_training_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          staff_training_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_training_cert_staff_training_fk"
            columns: ["staff_training_id"]
            isOneToOne: false
            referencedRelation: "staff_training"
            referencedColumns: ["id"]
          },
        ]
      }
      state: {
        Row: {
          abbr: string | null
          code: string | null
          id: number
          name: string | null
          region_id: number | null
        }
        Insert: {
          abbr?: string | null
          code?: string | null
          id?: number
          name?: string | null
          region_id?: number | null
        }
        Update: {
          abbr?: string | null
          code?: string | null
          id?: number
          name?: string | null
          region_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "state_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
        ]
      }
      target_participant: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          is_active: boolean | null
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      task: {
        Row: {
          asset_id: number | null
          created_at: string | null
          created_by: string
          detail: string | null
          id: number
          registration_number: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          asset_id?: number | null
          created_at?: string | null
          created_by: string
          detail?: string | null
          id?: never
          registration_number?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          asset_id?: number | null
          created_at?: string | null
          created_by?: string
          detail?: string | null
          id?: never
          registration_number?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      team_area: {
        Row: {
          area_name: string | null
          created_at: string | null
          created_by: string
          id: number
          state_id: number | null
          team_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          area_name?: string | null
          created_at?: string | null
          created_by: string
          id?: never
          state_id?: number | null
          team_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          area_name?: string | null
          created_at?: string | null
          created_by?: string
          id?: never
          state_id?: number | null
          team_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tech_partner: {
        Row: {
          code: string | null
          id: number
          name: string | null
        }
        Insert: {
          code?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          code?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      tech_partner_dusp: {
        Row: {
          created_at: string | null
          created_by: string | null
          dusp_id: number | null
          id: number
          tp_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          dusp_id?: number | null
          id: number
          tp_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          dusp_id?: number | null
          id?: number
          tp_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tech_partner_dusp_dusp_tp_fk"
            columns: ["dusp_id"]
            isOneToOne: false
            referencedRelation: "dusp_tp"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tech_partner_dusp_tech_partner_fk"
            columns: ["tp_id"]
            isOneToOne: false
            referencedRelation: "tech_partner"
            referencedColumns: ["id"]
          },
        ]
      }
      tech_partner_profile: {
        Row: {
          created_at: string
          created_by: string | null
          dob: string | null
          fullname: string
          ic_no: string
          id: number
          is_active: boolean | null
          join_date: string | null
          marital_status: number | null
          mobile_no: string
          nationality: string | null
          personal_email: string | null
          place_of_birth: string | null
          position_id: number | null
          qualification: string | null
          race: string | null
          religion: string | null
          resign_date: string | null
          site_id: number | null
          tech_partner_id: number | null
          updated_at: string
          updated_by: string | null
          user_id: number | null
          work_email: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          dob?: string | null
          fullname: string
          ic_no: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          marital_status?: number | null
          mobile_no: string
          nationality?: string | null
          personal_email?: string | null
          place_of_birth?: string | null
          position_id?: number | null
          qualification?: string | null
          race?: string | null
          religion?: string | null
          resign_date?: string | null
          site_id?: number | null
          tech_partner_id?: number | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          dob?: string | null
          fullname?: string
          ic_no?: string
          id?: number
          is_active?: boolean | null
          join_date?: string | null
          marital_status?: number | null
          mobile_no?: string
          nationality?: string | null
          personal_email?: string | null
          place_of_birth?: string | null
          position_id?: number | null
          qualification?: string | null
          race?: string | null
          religion?: string | null
          resign_date?: string | null
          site_id?: number | null
          tech_partner_id?: number | null
          updated_at?: string
          updated_by?: string | null
          user_id?: number | null
          work_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tech_partner_profile_marital_status_fkey"
            columns: ["marital_status"]
            isOneToOne: false
            referencedRelation: "marital_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tech_partner_profile_position_id_fkey"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tech_partner_profile_tech_partner_id_fkey"
            columns: ["tech_partner_id"]
            isOneToOne: false
            referencedRelation: "tech_partner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tech_partner_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      technology: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      training: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          id: number
          is_active: boolean | null
          location: string | null
          mode: string | null
          online_link: string | null
          start_date: string | null
          title: string | null
          trainer_name: string | null
          type: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id: number
          is_active?: boolean | null
          location?: string | null
          mode?: string | null
          online_link?: string | null
          start_date?: string | null
          title?: string | null
          trainer_name?: string | null
          type?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: number
          is_active?: boolean | null
          location?: string | null
          mode?: string | null
          online_link?: string | null
          start_date?: string | null
          title?: string | null
          trainer_name?: string | null
          type?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "training_training_type_fk"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "training_type"
            referencedColumns: ["id"]
          },
        ]
      }
      training_type: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      type_maintenance: {
        Row: {
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      type_relationship: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      type_sector: {
        Row: {
          bm: string | null
          eng: string | null
          id: number
        }
        Insert: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Update: {
          bm?: string | null
          eng?: string | null
          id?: number
        }
        Relationships: []
      }
      type_utilities: {
        Row: {
          created_at: string | null
          created_by: string
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: never
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: never
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      usage_log: {
        Row: {
          booking_id: number | null
          created_at: string | null
          created_by: string | null
          id: number
          login_time: string | null
          logout_time: string | null
          updated_at: string | null
          updated_by: string | null
          usage_hours: number | null
        }
        Insert: {
          booking_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id: number
          login_time?: string | null
          logout_time?: string | null
          updated_at?: string | null
          updated_by?: string | null
          usage_hours?: number | null
        }
        Update: {
          booking_id?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          login_time?: string | null
          logout_time?: string | null
          updated_at?: string | null
          updated_by?: string | null
          usage_hours?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "usage_log_booking_fk"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "booking"
            referencedColumns: ["id"]
          },
        ]
      }
      user_group: {
        Row: {
          created_at: string
          description: string | null
          group_name: string | null
          id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          group_name?: string | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          group_name?: string | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      user_permission: {
        Row: {
          created_at: string
          descritpion: string | null
          id: number
          permission_name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          descritpion?: string | null
          id?: number
          permission_name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          descritpion?: string | null
          id?: number
          permission_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_profile: {
        Row: {
          created_at: string | null
          created_by: string | null
          email: string
          group_id: number
          id: number
          password: string
          phone_number: string
          status: boolean | null
          updated_at: string | null
          updated_by: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          email: string
          group_id: number
          id?: number
          password: string
          phone_number: string
          status?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          email?: string
          group_id?: number
          id?: number
          password?: string
          phone_number?: string
          status?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "USER_PROFILE_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_group"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_profile_user_group_fk"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "user_group"
            referencedColumns: ["id"]
          },
        ]
      }
      user_role: {
        Row: {
          created_at: string
          description: string | null
          id: number
          role_name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          role_name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          role_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      utilities: {
        Row: {
          amount_bill: number | null
          created_at: string | null
          created_by: string
          id: number
          month: number | null
          reference_no: string | null
          remark: string | null
          site_id: number | null
          type_id: number | null
          updated_at: string | null
          updated_by: string | null
          year: number | null
        }
        Insert: {
          amount_bill?: number | null
          created_at?: string | null
          created_by: string
          id?: never
          month?: number | null
          reference_no?: string | null
          remark?: string | null
          site_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          year?: number | null
        }
        Update: {
          amount_bill?: number | null
          created_at?: string | null
          created_by?: string
          id?: never
          month?: number | null
          reference_no?: string | null
          remark?: string | null
          site_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          year?: number | null
        }
        Relationships: []
      }
      utilities_attachment: {
        Row: {
          created_at: string | null
          created_by: string | null
          file_path: string | null
          id: number
          updated_at: string | null
          updated_by: string | null
          utilities_id: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id: number
          updated_at?: string | null
          updated_by?: string | null
          utilities_id?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          file_path?: string | null
          id?: number
          updated_at?: string | null
          updated_by?: string | null
          utilities_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "type_utilities_utilities_fk"
            columns: ["utilities_id"]
            isOneToOne: false
            referencedRelation: "utilities"
            referencedColumns: ["id"]
          },
        ]
      }
      utilities_threshold: {
        Row: {
          amount: number | null
          created_at: string | null
          created_by: string
          id: number
          tech_profile_id: number | null
          type_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          created_by: string
          id?: never
          tech_profile_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          created_by?: string
          id?: never
          tech_profile_id?: number | null
          type_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      vendor_address: {
        Row: {
          address1: string | null
          address2: string | null
          city: string | null
          created_at: string | null
          created_by: string
          district_id: number | null
          id: number
          is_active: boolean | null
          postcode: string | null
          registration_number: string | null
          remark: string | null
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          created_at?: string | null
          created_by: string
          district_id?: number | null
          id?: never
          is_active?: boolean | null
          postcode?: string | null
          registration_number?: string | null
          remark?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          created_at?: string | null
          created_by?: string
          district_id?: number | null
          id?: never
          is_active?: boolean | null
          postcode?: string | null
          registration_number?: string | null
          remark?: string | null
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_address_registration_number_fkey"
            columns: ["registration_number"]
            isOneToOne: false
            referencedRelation: "vendor_profile"
            referencedColumns: ["registration_number"]
          },
          {
            foreignKeyName: "vendor_address_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_attachment: {
        Row: {
          created_at: string | null
          created_by: string
          file_name: string | null
          file_path: string | null
          id: number
          mime_type: string | null
          report_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          file_name?: string | null
          file_path?: string | null
          id?: never
          mime_type?: string | null
          report_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          file_name?: string | null
          file_path?: string | null
          id?: never
          mime_type?: string | null
          report_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_attachment_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "vendor_report"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_contract: {
        Row: {
          contract_end: string | null
          contract_start: string | null
          created_at: string | null
          created_by: string
          duration: number | null
          id: number
          is_active: boolean | null
          registration_number: string
          updated_at: string | null
          updated_by: string | null
          user_id: number
        }
        Insert: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by: string
          duration?: number | null
          id?: never
          is_active?: boolean | null
          registration_number: string
          updated_at?: string | null
          updated_by?: string | null
          user_id: number
        }
        Update: {
          contract_end?: string | null
          contract_start?: string | null
          created_at?: string | null
          created_by?: string
          duration?: number | null
          id?: never
          is_active?: boolean | null
          registration_number?: string
          updated_at?: string | null
          updated_by?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "vendor_contract_registration_number_fkey"
            columns: ["registration_number"]
            isOneToOne: false
            referencedRelation: "vendor_profile"
            referencedColumns: ["registration_number"]
          },
          {
            foreignKeyName: "vendor_contract_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_profile: {
        Row: {
          bank_account_number: number | null
          business_name: string | null
          business_type: string | null
          created_at: string | null
          created_by: string
          id: number
          phone_number: string | null
          registration_number: string
          service_detail: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          bank_account_number?: number | null
          business_name?: string | null
          business_type?: string | null
          created_at?: string | null
          created_by: string
          id?: never
          phone_number?: string | null
          registration_number: string
          service_detail?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          bank_account_number?: number | null
          business_name?: string | null
          business_type?: string | null
          created_at?: string | null
          created_by?: string
          id?: never
          phone_number?: string | null
          registration_number?: string
          service_detail?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      vendor_report: {
        Row: {
          created_at: string | null
          created_by: string
          id: number
          notes: string | null
          notify_email: string | null
          registration_number: string
          report_date: string | null
          report_type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: never
          notes?: string | null
          notify_email?: string | null
          registration_number: string
          report_date?: string | null
          report_type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: never
          notes?: string | null
          notify_email?: string | null
          registration_number?: string
          report_date?: string | null
          report_type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_report_registration_number_fkey"
            columns: ["registration_number"]
            isOneToOne: false
            referencedRelation: "vendor_profile"
            referencedColumns: ["registration_number"]
          },
        ]
      }
      vendor_staff: {
        Row: {
          created_at: string | null
          created_by: string | null
          fullname: string | null
          ic_no: number | null
          id: number
          is_active: boolean | null
          mobile_no: number | null
          position_id: number | null
          registration_number: number | null
          updated_at: string | null
          updated_by: string | null
          work_email: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          fullname?: string | null
          ic_no?: number | null
          id: number
          is_active?: boolean | null
          mobile_no?: number | null
          position_id?: number | null
          registration_number?: number | null
          updated_at?: string | null
          updated_by?: string | null
          work_email?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          fullname?: string | null
          ic_no?: number | null
          id?: number
          is_active?: boolean | null
          mobile_no?: number | null
          position_id?: number | null
          registration_number?: number | null
          updated_at?: string | null
          updated_by?: string | null
          work_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_staff_position_fk"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "position"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_staff_vendor_profile_fk"
            columns: ["registration_number"]
            isOneToOne: false
            referencedRelation: "vendor_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_staff_team: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          updated_at: string | null
          updated_by: string | null
          vendor_staff_id: number | null
          vendor_team_id: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id: number
          updated_at?: string | null
          updated_by?: string | null
          vendor_staff_id?: number | null
          vendor_team_id?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          updated_at?: string | null
          updated_by?: string | null
          vendor_staff_id?: number | null
          vendor_team_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_staff_team_vendor_staff_fk"
            columns: ["vendor_staff_id"]
            isOneToOne: false
            referencedRelation: "vendor_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_staff_team_vendor_team_fk"
            columns: ["vendor_team_id"]
            isOneToOne: false
            referencedRelation: "vendor_team"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_state: {
        Row: {
          created_at: string | null
          created_by: string
          id: number
          registration_number: string
          state_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: never
          registration_number: string
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: never
          registration_number?: string
          state_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_state_registration_number_fkey"
            columns: ["registration_number"]
            isOneToOne: false
            referencedRelation: "vendor_profile"
            referencedColumns: ["registration_number"]
          },
          {
            foreignKeyName: "vendor_state_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_team: {
        Row: {
          created_at: string | null
          created_by: string
          id: number
          name: string | null
          registration_number: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: never
          name?: string | null
          registration_number?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: never
          name?: string | null
          registration_number?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_team_registration_number_fkey"
            columns: ["registration_number"]
            isOneToOne: false
            referencedRelation: "vendor_profile"
            referencedColumns: ["registration_number"]
          },
        ]
      }
      work_order: {
        Row: {
          created_at: string | null
          created_by: string | null
          date_complete: string | null
          date_issued: string | null
          estimated_days: number | null
          id: number
          issued_by: string | null
          request_id: number | null
          state_id: number | null
          status: number | null
          team_id: number | null
          updated_at: string | null
          updated_by: string | null
          vendor_id: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date_complete?: string | null
          date_issued?: string | null
          estimated_days?: number | null
          id: number
          issued_by?: string | null
          request_id?: number | null
          state_id?: number | null
          status?: number | null
          team_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          vendor_id?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date_complete?: string | null
          date_issued?: string | null
          estimated_days?: number | null
          id?: number
          issued_by?: string | null
          request_id?: number | null
          state_id?: number | null
          status?: number | null
          team_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
          vendor_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "work_order_maintenance_request_fk"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "maintenance_request"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_order_state_fk"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_order_vendor_profile_fk"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendor_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_order_vendor_team_fk"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "vendor_team"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_order_work_order_status_fk"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "work_order_status"
            referencedColumns: ["id"]
          },
        ]
      }
      work_order_report: {
        Row: {
          attachment: string | null
          created_at: string | null
          created_by: string | null
          date_complete: string | null
          date_issued: string | null
          id: number
          report_detail: string | null
          status: number | null
          updated_at: string | null
          updated_by: string | null
          work_order_id: number | null
        }
        Insert: {
          attachment?: string | null
          created_at?: string | null
          created_by?: string | null
          date_complete?: string | null
          date_issued?: string | null
          id: number
          report_detail?: string | null
          status?: number | null
          updated_at?: string | null
          updated_by?: string | null
          work_order_id?: number | null
        }
        Update: {
          attachment?: string | null
          created_at?: string | null
          created_by?: string | null
          date_complete?: string | null
          date_issued?: string | null
          id?: number
          report_detail?: string | null
          status?: number | null
          updated_at?: string | null
          updated_by?: string | null
          work_order_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "work_order_report_work_order_fk"
            columns: ["work_order_id"]
            isOneToOne: false
            referencedRelation: "work_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_order_report_work_order_status_fk"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "work_order_status"
            referencedColumns: ["id"]
          },
        ]
      }
      work_order_status: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      zone: {
        Row: {
          area: string | null
          id: number
          zone: string | null
        }
        Insert: {
          area?: string | null
          id?: number
          zone?: string | null
        }
        Update: {
          area?: string | null
          id?: number
          zone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
