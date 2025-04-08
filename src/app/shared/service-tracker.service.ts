import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface ServiceInstance {
  id: string;
  type: 'legacy' | 'modern';
  createdAt: Date;
}

@Injectable()
export class ServiceTrackerService {
  private instances = signal<ServiceInstance[]>([]);

  constructor() {
    console.log("ServiceTrackerService created")
  }

  trackInstance(type: 'legacy' | 'modern'): string {
    const instance: ServiceInstance = {
      id: crypto.randomUUID(),
      type,
      createdAt: new Date()
    };
    
    this.instances.update(current => [...current, instance]);
    return instance.id;
  }

  getAllInstances(): ServiceInstance[] {
    return this.instances();
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3
    }).format(date);
  }
}