import request from '@/plugins/gllobalRequest';
import {returnSentenceType, sentenceType} from "@/model/sentence";




/** 根据原始数据获取中文分词结果 /api/sentence/send */
export async function sendSentence(body: sentenceType,options?: { [key: string]: any }) {
  return request<returnSentenceType>('/api/sentence/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

