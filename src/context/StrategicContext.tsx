import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StrategicContextData {
  isOpen: boolean;
  title: string;
  type: 'OKR' | 'AGENT' | 'DECISION' | 'KNOWLEDGE';
  relatedEntities: {
    okrs?: { id: string; title: string; status: string }[];
    agents?: { id: string; name: string; status: string }[];
    decisions?: { id: string; title: string; impact: string }[];
    knowledge?: { id: string; label: string; type: string }[];
  };
  agentInsight?: string;
}

interface StrategicContextType {
  contextData: StrategicContextData;
  openContext: (data: Omit<StrategicContextData, 'isOpen'>) => void;
  closeContext: () => void;
}

const StrategicContextContext = createContext<StrategicContextType | undefined>(undefined);

export const StrategicContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contextData, setContextData] = useState<StrategicContextData>({
    isOpen: false,
    title: '',
    type: 'OKR',
    relatedEntities: {},
  });

  const openContext = (data: Omit<StrategicContextData, 'isOpen'>) => {
    setContextData({ ...data, isOpen: true });
  };

  const closeContext = () => {
    setContextData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <StrategicContextContext.Provider value={{ contextData, openContext, closeContext }}>
      {children}
    </StrategicContextContext.Provider>
  );
};

export const useStrategicContext = () => {
  const context = useContext(StrategicContextContext);
  if (!context) {
    throw new Error('useStrategicContext must be used within a StrategicContextProvider');
  }
  return context;
};
