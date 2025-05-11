
// This is a service to handle form data storage
// In a real application, this would connect to a backend service

interface StorageService {
  saveForm: (formData: any) => Promise<{ success: boolean; id?: string; error?: string }>;
  getForms: () => Promise<any[]>;
  getForm: (id: string) => Promise<any | null>;
}

// Local storage implementation for form data
export const localStorageService: StorageService = {
  saveForm: async (formData: any) => {
    try {
      // Generate a simple ID for the form
      const formId = `form_${Date.now()}`;
      
      // Get existing forms from local storage
      const existingFormsString = localStorage.getItem('inspectionForms');
      const existingForms = existingFormsString ? JSON.parse(existingFormsString) : [];
      
      // Add the new form with ID and timestamp
      const newForm = {
        id: formId,
        createdAt: new Date().toISOString(),
        data: formData
      };
      
      // Save to local storage
      localStorage.setItem('inspectionForms', JSON.stringify([...existingForms, newForm]));
      
      return { success: true, id: formId };
    } catch (error) {
      console.error("Error saving form data:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error saving form" 
      };
    }
  },
  
  getForms: async () => {
    try {
      const formsString = localStorage.getItem('inspectionForms');
      return formsString ? JSON.parse(formsString) : [];
    } catch (error) {
      console.error("Error retrieving forms:", error);
      return [];
    }
  },
  
  getForm: async (id: string) => {
    try {
      const formsString = localStorage.getItem('inspectionForms');
      const forms = formsString ? JSON.parse(formsString) : [];
      
      return forms.find((form: any) => form.id === id) || null;
    } catch (error) {
      console.error("Error retrieving form:", error);
      return null;
    }
  }
};

// In a real application, you might have multiple implementations
// such as API service, IndexedDB service, etc.

// Default export - change this to use a different implementation
export default localStorageService;
