import { GeneBasePair } from '../../types';

export const initialSequence: GeneBasePair[] = [
  { id: '1', code: 'A', complement: 'T', label: 'Adenine-Thymine', color: '#00f2fe', status: 'normal' },
  { id: '2', code: 'C', complement: 'G', label: 'Cytosine-Guanine', color: '#8b5cf6', status: 'normal' },
  { id: '3', code: 'G', complement: 'C', label: 'Guanine-Cytosine', color: '#f59e0b', status: 'normal' },
  { id: '4', code: 'T', complement: 'A', label: 'Thymine-Adenine', color: '#10b981', status: 'normal' },
  { id: '5', code: 'A', complement: 'T', label: 'Adenine-Thymine', color: '#00f2fe', status: 'normal' },
  { id: '6', code: 'C', complement: 'G', label: 'Cytosine-Guanine', color: '#8b5cf6', status: 'normal' },
  { id: '7', code: 'T', complement: 'A', label: 'Thymine-Adenine', color: '#10b981', status: 'normal' },
  { id: '8', code: 'G', complement: 'C', label: 'Guanine-Cytosine', color: '#f59e0b', status: 'normal' },
  { id: '9', code: 'A', complement: 'T', label: 'Adenine-Thymine', color: '#00f2fe', status: 'normal' },
  { id: '10', code: 'C', complement: 'G', label: 'Cytosine-Guanine', color: '#8b5cf6', status: 'normal' },
  { id: '11', code: 'T', complement: 'A', label: 'Thymine-Adenine', color: '#10b981', status: 'normal' },
  { id: '12', code: 'G', complement: 'C', label: 'Guanine-Cytosine', color: '#f59e0b', status: 'normal' },
];

export const targetOptimalCodes = ['A', 'G', 'C', 'T', 'G', 'C', 'A', 'T', 'C', 'G', 'A', 'T'];
